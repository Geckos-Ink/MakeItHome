import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board, Card, Label, List } from 'app/modules/admin/apps/scrumboard/scrumboard.models';
import { BehaviorSubject, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ScrumboardService
{
    // Private
    private _board: BehaviorSubject<Board | null>;
    private _boards: BehaviorSubject<Board[] | null>;
    private _card: BehaviorSubject<Card | null>;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
    )
    {
        // Set the private defaults
        this._board = new BehaviorSubject(null);
        this._boards = new BehaviorSubject(null);
        this._card = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for board
     */
    get board$(): Observable<Board>
    {
        return this._board.asObservable();
    }

    /**
     * Getter for boards
     */
    get boards$(): Observable<Board[]>
    {
        return this._boards.asObservable();
    }

    /**
     * Getter for card
     */
    get card$(): Observable<Card>
    {
        return this._card.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get boards
     */
    getBoards(): Observable<Board[]>
    {
        return this._httpClient.get<Board[]>('api/apps/scrumboard/boards').pipe(
            map((response) => {
                if(response)
                    return response.map(item => new Board(item))

                return []
            }),
            tap(boards => this._boards.next(boards)),
        );
    }

    updateBoards() : Observable<Board[]>
    {
        return this._httpClient.patch<Board[]>('api/apps/scrumboard/boards', this._boards.getValue()).pipe(
            tap((boards) => {
                this._boards.next(boards)
            }),
        );
    }

    /**
     * Get board
     *
     * @param id
     */
    getBoard(id: string): Observable<Board>
    {
        let boards = this._boards.getValue()

        let board = null
        for(let _board of boards){
            if(_board.id == id){
                board = _board
                break;
            }
        }

        this._board.next(board)

        let resp = new BehaviorSubject<Board>(board)
        return resp.asObservable()
    }

    /**
     * Create board
     *
     * @param board
     */
    createBoard(board: Board): Observable<Board>
    {
        let boards = this._boards.getValue() || []
        boards.push(board)        
        this._boards.next(boards)

        this.updateBoards().subscribe()

        let resp = new BehaviorSubject<Board>(board)
        return resp.asObservable()
    }

    /**
     * Update the board
     *
     * @param id
     * @param board
     */
    updateBoard(id: string, board: Board): Observable<Board>
    {
        let boards = this._boards.getValue()

        // Find the index of the updated board
        const index = boards.findIndex(item => item.id === id);

        // Update the board
        boards[index] = board;

        // Update the boards
        this._boards.next(boards);

        this.updateBoards().subscribe()

        let resp = new BehaviorSubject<Board>(board)
        return resp.asObservable()
    }

    /**
     * Delete the board
     *
     * @param id
     */
    deleteBoard(id: string): Observable<boolean>
    {
        let boards = this._boards.getValue()

        // Find the index of the deleted board
        const index = boards.findIndex(item => item.id === id);

        // Delete the board
        boards.splice(index, 1);

        // Update the boards
        this._boards.next(boards);

        this.updateBoards().subscribe()
        
        let resp = new BehaviorSubject<boolean>(true)
        return resp.asObservable()
    }

    /**
     * Create list
     *
     * @param list
     */
    createList(list: List): Observable<List>
    {
        // Get the board value
        const board = this._board.value;

        // Update the board lists with the new list
        board.lists = [...board.lists, list];

        // Sort the board lists
        board.lists.sort((a, b) => a.position - b.position);

        // Update the board
        this._board.next(board);

        this.updateBoards().subscribe()

        let resp = new BehaviorSubject<List>(list)
        return resp.asObservable()
    }

    /**
     * Update the list
     *
     * @param list
     */
    updateList(list: List): Observable<List>
    {
        // Get the board value
        const board = this._board.value;

        // Find the index of the updated list
        const index = board.lists.findIndex(item => item.id === list.id);

        // Update the list
        board.lists[index] = list;

        // Sort the board lists
        board.lists.sort((a, b) => a.position - b.position);

        // Update the board
        this._board.next(board);

        this.updateBoards().subscribe()

        let resp = new BehaviorSubject<List>(list)
        return resp.asObservable()
    }

    /**
     * Update the lists
     *
     * @param lists
     */
    updateLists(lists: List[]): Observable<List[]>
    {
        // Get the board value
        const board = this._board.value;

        // Go through the updated lists
        lists.forEach((updatedList) =>
        {
            // Find the index of the updated list
            const index = board.lists.findIndex(item => item.id === updatedList.id);

            // Update the list
            board.lists[index] = updatedList;
        });

        // Sort the board lists
        board.lists.sort((a, b) => a.position - b.position);

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        let resp = new BehaviorSubject<List[]>(lists)
        return resp.asObservable()
    }

    /**
     * Delete the list
     *
     * @param id
     */
    deleteList(id: string): Observable<boolean>
    {
        // Get the board value
        const board = this._board.value;

        // Find the index of the deleted list
        const index = board.lists.findIndex(item => item.id === id);

        // Delete the list
        board.lists.splice(index, 1);

        // Sort the board lists
        board.lists.sort((a, b) => a.position - b.position);

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        let resp = new BehaviorSubject<boolean>(true)
        return resp.asObservable()
    }

    /**
     * Get card
     */
    getCard(id: string): Observable<Card>
    {
        let board = this._board.getValue()

        // Find the card
        const card = board.lists.find(list => list.cards.some(item => item.id === id))
            .cards.find(item => item.id === id);

        // Update the card
        this._card.next(card);

        // Return the card
        let resp = new BehaviorSubject<Card>(card)
        return resp.asObservable()
    }

    /**
     * Create card
     *
     * @param card
     */
    createCard(card: Card): Observable<Card>
    {
        // Get the board value
        const board = this._board.value;

        // Find the list and push the new card in it
        board.lists.forEach((listItem, index, list) =>
        {
            if ( listItem.id === card.listId )
            {
                list[index].cards.push(card);
            }
        });

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        // Return the card
        let resp = new BehaviorSubject<Card>(card)
        return resp.asObservable()
    }

    /**
     * Update the card
     *
     * @param id
     * @param card
     */
    updateCard(id: string, card: Card): Observable<Card>
    {
        // Get the board value
        const board = this._board.value;

        // Find the card and update it
        board.lists.forEach((listItem) =>
        {
            listItem.cards.forEach((cardItem, index, array) =>
            {
                if ( cardItem.id === id )
                {
                    array[index] = card;
                }
            });
        });

        // Update the board
        this._board.next(board);

        // Update the card
        this._card.next(card);

        this.updateBoard(board.id, board).subscribe()
        
        // Return the card
        let resp = new BehaviorSubject<Card>(card)
        return resp.asObservable()
    }

    /**
     * Update the cards
     *
     * @param cards
     */
    updateCards(cards: Card[]): Observable<Card[]>
    {
        // Get the board value
        const board = this._board.value;

        // Go through the updated cards
        cards.forEach((updatedCard) =>
        {
            // Find the index of the updated card's list
            const listIndex = board.lists.findIndex(list => list.id === updatedCard.listId);

            // Find the index of the updated card
            const cardIndex = board.lists[listIndex].cards.findIndex(item => item.id === updatedCard.id);

            // Update the card
            board.lists[listIndex].cards[cardIndex] = updatedCard;

            // Sort the cards
            board.lists[listIndex].cards.sort((a, b) => a.position - b.position);
        });

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        let resp = new BehaviorSubject<Card[]>(cards)
        return resp.asObservable()
    }

    /**
     * Delete the card
     *
     * @param id
     */
    deleteCard(id: string): Observable<boolean>
    {
        // Get the board value
        const board = this._board.value;

        // Find the card and delete it
        board.lists.forEach((listItem) =>
        {
            listItem.cards.forEach((cardItem, index, array) =>
            {
                if ( cardItem.id === id )
                {
                    array.splice(index, 1);
                }
            });
        });

        // Update the board
        this._board.next(board);

        // Update the card
        this._card.next(null);

        this.updateBoard(board.id, board).subscribe()

        let resp = new BehaviorSubject<boolean>(true)
        return resp.asObservable()
    }

    /**
     * Create label
     *
     * @param label
     */
    createLabel(label: Label): Observable<Label>
    {
        // Get the board value
        const board = this._board.value;

        // Update the board labels with the new label
        board.labels = [...board.labels, label];

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        // Return new label from observable
        let resp = new BehaviorSubject<Label>(label)
        return resp.asObservable()
    }

    /**
     * Update the label
     *
     * @param id
     * @param label
     */
    updateLabel(id: string, label: Label): Observable<Label>
    {
        // Get the board value
        const board = this._board.value;

        // Find the index of the updated label
        const index = board.labels.findIndex(item => item.id === id);

        // Update the label
        board.labels[index] = label;

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        // Return new label from observable
        let resp = new BehaviorSubject<Label>(label)
        return resp.asObservable()
    }

    /**
     * Delete the label
     *
     * @param id
     */
    deleteLabel(id: string): Observable<boolean>
    {
        // Get the board value
        const board = this._board.value;
        
        // Find the index of the deleted label
        const index = board.labels.findIndex(item => item.id === id);

        // Delete the label
        board.labels.splice(index, 1);

        // If the label is deleted...
        // Remove the label from any card that uses it
        board.lists.forEach((list) =>
        {
            list.cards.forEach((card) =>
            {
                const labelIndex = card.labels.findIndex(label => label.id === id);
                if ( labelIndex > -1 )
                {
                    card.labels.splice(labelIndex, 1);
                }
            });
        });

        // Update the board
        this._board.next(board);

        this.updateBoard(board.id, board).subscribe()

        // Return the deleted status
        let resp = new BehaviorSubject<boolean>(true)
        return resp.asObservable()
    }

    /**
     * Search within board cards
     *
     * @param query
     */
    search(query: string): Observable<Card[] | null>
    {
        // @TODO: Update the board cards based on the search results
        return this._httpClient.get<Card[] | null>('api/apps/scrumboard/board/search', {params: {query}});
    }
}
