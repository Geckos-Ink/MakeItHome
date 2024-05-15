import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Label, Note } from 'app/modules/admin/apps/notes/notes.types';
import { cloneDeep, toInteger } from 'lodash-es';
import { BehaviorSubject, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { FuseMockApiUtils } from '@fuse/lib/mock-api';

@Injectable({providedIn: 'root'})
export class NotesService
{
    // Private
    private _labels: BehaviorSubject<Label[]> = new BehaviorSubject<Label[]>([]);
    private _note: BehaviorSubject<Note> = new BehaviorSubject<Note>(null);
    private _notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    get labels$(): Observable<Label[]>
    {
        return this._labels.asObservable();
    }

    get notes$(): Observable<Note[]>
    {
        return this._notes.asObservable();
    }

    get note$(): Observable<Note>
    {
        return this._note.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get labels
     */
    getLabels(): Observable<Label[]>
    {
        return this._httpClient.get<Label[]>('api/apps/notes/labels').pipe(
            tap((response: Label[]) =>
            {
                console.log("get labels response", response)
                this._labels.next(response)
            }),
        );
    }

    /**
     * Add label
     *
     * @param title
     */
    addLabel(title: string): Observable<Label[]>
    {
        // Create a new label
        const label = {
            id   : FuseMockApiUtils.guid(),
            title: title,
        };

        let labels = this._labels.getValue()

        // Update the labels
        labels.push(label);

        return this._httpClient.post<Label[]>('api/apps/notes/labels', this._labels).pipe(
            tap((labels) =>
            {
                // Update the labels
                this._labels.next(labels)
            }),
        );
    }

    /**
     * Update label
     *
     * @param label
     */
    updateLabel(label: Label): Observable<Label[]>
    {
        let labels = this._labels.getValue()

        // Update the label
        this._labels.next(labels.map((label) =>
        {
            if ( label.id === label.id )
            {
                return {
                    ...label,
                    title: label.title,
                };
            }

            return label;
        }));

        return this.updateLabels();
    }

    updateLabels() {
        return this._httpClient.patch<Label[]>('api/apps/notes/labels', this._labels.getValue()).pipe(
            tap((labels) =>
            {
                // Update the notes
                this.getNotes().subscribe();

                // Update the labels
                this._labels.next(labels)
            }),
        );
    }

    /**
     * Delete a label
     *
     * @param id
     */
    deleteLabel(id: string): Observable<Label[]>
    {
        let labels = this._labels.getValue()
        let notes = this._notes.getValue()

        // Delete the label
        labels = labels.filter(label => label.id !== id);
        this._labels.next(labels)

        // Go through notes and delete the label
        notes = notes.map(note => ({
            ...note,
            labels: note.labels.filter(item => item !== id),
        }));
        this._notes.next(notes)

        this.updateNotes().subscribe();
        return this.updateLabels()
    }

    /**
     * Get notes
     */
    getNotes(): Observable<Note[]>
    {
        return this._httpClient.get<Note[]>('api/apps/notes').pipe(
            tap((response: Note[]) =>
            {
                console.log("Get notes response: ", response)

                for(let note of response){
                    for(let i in note.labels){
                        if(!note.labels[i]){
                            note.labels.splice(toInteger(i), 1)
                        }
                    }
                }

                this._notes.next(response)
            }),
        );
    }

    /**
     * Get note by id
     */
    getNoteById(id: string): Observable<Note>
    {
        return this._notes.pipe(
            take(1),
            map((notes) =>
            {
                // Find within the folders and files
                const note = notes.find(value => value.id === id) || null;                

                // Update the note
                this._note.next(note);

                // Return the note
                return note;
            }),
            switchMap((note) =>
            {
                if ( !note )
                {
                    return throwError('Could not found the note with id of ' + id + '!');
                }

                return of(note);
            }),
        );
    }

    /**
     * Add task to the given note
     *
     * @param note
     * @param task
     */
    addTask(updatedNote: Note, task: string): Observable<Note>
    {
        let notes = this._notes.getValue()

        // Update the note
        notes = notes.map((note) =>
        {
            if ( note.id === updatedNote.id )
            {
                // Update the tasks
                if ( !note.tasks )
                {
                    note.tasks = [];
                }

                note.tasks.push({
                    id       : FuseMockApiUtils.guid(),
                    content  : task,
                    completed: false,
                });

                // Update the updatedNote with the new task
                updatedNote = cloneDeep(note);

                return {
                    ...note,
                };
            }

            return note;
        });

        this._note.next(updatedNote)        
        this._notes.next(notes)
    
        this.updateNotes().subscribe();

        return this.note$
    }

    /**
     * Create note
     *
     * @param note
     */
    createNote(note: Note): Observable<Note>
    {
        // Add an id
        note.id = FuseMockApiUtils.guid();

        note.labels = note.labels || []
        note.tasks = note.tasks || []
        note.createdAt = (new Date()).toISOString()

        // Push the note
        let notes = this._notes.getValue() || []
        notes.push(note);
        this._notes.next(notes)

        this.updateNotes().subscribe();

        this._note.next(note)
        return this.note$
    }

    /**
     * Update the note
     *
     * @param note
     */
    updateNote(note: Note): Observable<Note>
    {
        // Clone the note to prevent accidental reference based updates
        const updatedNote = cloneDeep(note) as any;

        this._note.next(updatedNote)
        
        let notes = this._notes.value
        let found = false
        for(let n in notes){
            let note = notes[n]            
            if(note.id == updatedNote.id){
                notes[n] = updatedNote
                found = true
                break;
            }
        }

        console.log("updating notes: ", notes)

        this._notes.next(notes)
        this.updateNotes().subscribe();

        return this.note$
    }

    updateNotes(){
        let notes = this._notes.getValue()
        return this._httpClient.post<Note[]>('api/apps/notes', notes).pipe(
            tap((response) =>
            {
                if(!deepEqual(response, notes)){
                    setTimeout(()=>{
                        this.updateNotes().subscribe()
                    }, 100)                    
                }
            }),
        );
    }

    /**
     * Delete the note
     *
     * @param note
     */
    deleteNote(note: Note): Observable<boolean>
    {
        let resp = new BehaviorSubject<boolean>(false)

        let id = note.id 

        let notes = this._notes.getValue()

        // Find the note and delete it
        notes.forEach((item, index) =>
        {
            if ( item.id === id )
            {
                notes.splice(index, 1);

                this._notes.next(notes)
                resp.next(true)
            }
        });

        this.updateNotes().subscribe();

        return resp.asObservable()
    }
}

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