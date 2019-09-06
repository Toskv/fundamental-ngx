import { Observable } from 'rxjs';
/**
 * Reference to a modal component generated via the ModalService.
 * It can be injected into the content component through the constructor.
 * For a template, it is declared as part of the implicit context, see examples.
 */
export declare class ModalRef {
    private readonly _afterClosed;
    /**
     * Observable that is triggered when the modal is closed.
     * On close a *result* is passed back. On dismiss, an *error* is returned instead.
     */
    afterClosed: Observable<any>;
    /** Data passed from the calling component to the content.*/
    data: any;
    /**
     * Closes the modal and passes the argument to the afterClosed observable.
     * @param result Value passed back to the observable as a result.
     */
    close(result?: any): void;
    /**
     * Dismisses the modal and passes the argument to the afterClosed observable as an error.
     * @param reason Value passed back to the observable as an error.
     */
    dismiss(reason?: any): void;
}