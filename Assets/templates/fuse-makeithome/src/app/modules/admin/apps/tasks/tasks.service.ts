import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag, Task } from 'app/modules/admin/apps/tasks/tasks.types';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';

import { FuseMockApiUtils } from '@fuse/lib/mock-api/mock-api.utils';
import { assign, cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class TasksService
{
    // Private
    private _tags: BehaviorSubject<Tag[] | null> = new BehaviorSubject(null);
    private _task: BehaviorSubject<Task | null> = new BehaviorSubject(null);
    private _tasks: BehaviorSubject<Task[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for tags
     */
    get tags$(): Observable<Tag[]>
    {
        return this._tags.asObservable();
    }

    /**
     * Getter for task
     */
    get task$(): Observable<Task>
    {
        return this._task.asObservable();
    }

    /**
     * Getter for tasks
     */
    get tasks$(): Observable<Task[]>
    {
        return this._tasks.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get tags
     */
    getTags(): Observable<Tag[]>
    {
        return this._httpClient.get<Tag[]>('api/apps/tasks/tags').pipe(
            tap((response: any) =>
            {
                this._tags.next(response);
            }),
        );
    }

    updateTags(){
        let tags = this._tags.value

        return this._httpClient.post<Tag[]>('api/apps/tasks/tags', tags).pipe(
            tap((response: any) =>
            {
                this._tags.next(response);
            }),
        );
    }

    /**
     * Crate tag
     *
     * @param tag
     */
    createTag(tag: Tag): Observable<Tag>
    {
        let tags = this._tags.value || []

        tag.id = FuseMockApiUtils.guid()

        tags = [...tags, tag]

        // Update the tags with the new tag
        this._tags.next(tags);

        this.updateTags().subscribe();

        // Return new tag from observable
        let resp = new BehaviorSubject<Tag>(tag)
        return resp.asObservable()
    }

    /**
     * Update the tag
     *
     * @param id
     * @param tag
     */
    updateTag(id: string, tag: Tag): Observable<Tag>
    {
        let tags = this._tags.value 

        // Find the index of the updated tag
        const index = tags.findIndex(item => item.id === id);

        // Update the tag
        tags[index] = tag;

        // Update the tags
        this._tags.next(tags);

        this.updateTags().subscribe()

        let resp = new BehaviorSubject<Tag>(tag)
        return resp.asObservable()
    }

    /**
     * Delete the tag
     *
     * @param id
     */
    deleteTag(id: string): Observable<boolean>
    {
        let tags = this._tags.value 
        let tasks = this._tasks.value

        // Find the index of the deleted tag
        const index = tags.findIndex(item => item.id === id);

        // Delete the tag
        tags.splice(index, 1);

        // Update the tags
        this._tags.next(tags);

        // Iterate through the tasks
        tasks.forEach((task) =>
        {
            const tagIndex = task.tags.findIndex(tag => tag === id);

            // If the task has a tag, remove it
            if ( tagIndex > -1 )
            {
                task.tags.splice(tagIndex, 1);
                this._tasks.next(tasks)
                this.updateTasks().subscribe();                
            }
        });  

        this.updateTags().subscribe();
        
        let resp = new BehaviorSubject<boolean>(true)
        return resp.asObservable()
    }

    /**
     * Get tasks
     */
    getTasks(): Observable<Task[]>
    {
        return this._httpClient.get<Task[]>('api/apps/tasks').pipe(
            tap((response) =>
            {
                this._tasks.next(response);
            }),
        );
    }

    /**
     * Update tasks orders
     *
     * @param tasks
     */
    updateTasksOrders(tasks: Task[]): Observable<Task[]>
    {
        // Go through the tasks
        this._tasks.value.forEach((task) =>
        {
            // Find this task's index within the tasks array that comes with the request
            // and assign that index as the new order number for the task
            task.order = tasks.findIndex((item: any) => item.id === task.id);
        });

        // Clone the tasks
        this._tasks.next(tasks)

        return this._httpClient.patch<Task[]>('api/apps/tasks', tasks);
    }

    updateTasks(){
        let tasks = this._tasks.getValue()
        return this._httpClient.post<Task[]>('api/apps/tasks', tasks).pipe(
            tap((response) =>
            {
                if(!deepEqual(response, tasks)){                    
                    setTimeout(()=>{
                        this.updateTasks().subscribe()
                    }, 100)   
                }
            }),
        );
    }

    /**
     * Search tasks with given query
     *
     * @param query
     */
    searchTasks(query: string): Observable<Task[] | null>
    {
        // Prepare the search results
        let results;

        // If the query exists...
        if ( query )
        {
            // Clone the tasks
            let tasks = cloneDeep(this._tasks.value);

            // Filter the tasks
            tasks = tasks.filter(task => task.title && task.title.toLowerCase().includes(query.toLowerCase()) || task.notes && task.notes.toLowerCase()
                .includes(query.toLowerCase()));

            // Mark the found chars
            tasks.forEach((task) =>
            {
                const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                task.title = task.title.replace(re, '<mark>$1</mark>');
            });

            // Set them as the search result
            results = tasks;
        }
        // Otherwise, set the results to null
        else
        {
            results = null
        }
            
        let resp = new BehaviorSubject<Task[]|null>(results)
        return resp.asObservable()
    }

    /**
     * Get task by id
     */
    getTaskById(id: string): Observable<Task>
    {
        const tasks = this._tasks.value;

        // Find the task
        const task = tasks.find(item => item.id === id) || null;

        // Update the task
        this._task.next(task);

        // Return the task
        return of(task);
    }

    /**
     * Create task
     *
     * @param type
     */
    createTask(type: string): Observable<Task>
    {
        let tasks = this._tasks.value || []

        // Generate a new task
        const newTask = {
            id       : FuseMockApiUtils.guid(),
            type     : type,
            title    : '',
            notes    : null,
            completed: false,
            dueDate  : null,
            priority : 1,
            tags     : [],
            order    : 0,
        };

        // Update the tasks with the new task
        this._tasks.next([newTask as Task, ...tasks]);
        
        this.updateTasks().subscribe();

        // Return the new task
        return of(newTask as Task);
    }

    /**
     * Update task
     *
     * @param id
     * @param task
     */
    updateTask(id: string, task: Task): Observable<Task>
    {
        let tasks = this._tasks.value

        // Find the index of the updated task
        const index = tasks.findIndex(item => item.id === id);

        // Update the task
        tasks[index] = task;

        // Update the tasks
        this._tasks.next(tasks);

        this.updateTasks().subscribe()

        // Return the updated task
        return of(task);
    }

    /**
     * Delete the task
     *
     * @param id
     */
    deleteTask(id: string): Observable<boolean>
    {
        let tasks = this._tasks.value

        // Find the index of the deleted task
        const index = tasks.findIndex(item => item.id === id);

        // Delete the task
        tasks.splice(index, 1);

        // Update the tasks
        this._tasks.next(tasks);

        this.updateTasks().subscribe()

        // Return the deleted status
        return of(true);
    }
}

// same function in notes. todo: create import
function deepEqual(obj1, obj2) {
    // Check if the objects are of the same type
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    // If both are primitive types or null, compare them directly
    if (obj1 === obj2) {
      return true;
    }
  
    // If one of them is null, they are not equal
    if (obj1 === null || obj2 === null) {
      return false;
    }
  
    // If they are objects, compare their properties recursively
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      // Check if they have the same number of properties
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      // Check if all properties are deeply equal
      for (const key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    // If none of the above conditions match, the objects are not equal
    return false;
  }