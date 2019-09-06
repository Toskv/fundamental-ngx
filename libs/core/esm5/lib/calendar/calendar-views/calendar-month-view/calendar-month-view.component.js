/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewEncapsulation, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FdDate } from '../../models/fd-date';
import { CalendarI18n } from '../../i18n/calendar-i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarService } from '../../calendar.service';
/**
 * Component representing the month view of the calendar.
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    function CalendarMonthViewComponent(eRef, cdRef, calendarI18n, calendarService) {
        this.eRef = eRef;
        this.cdRef = cdRef;
        this.calendarI18n = calendarI18n;
        this.calendarService = calendarService;
        /**
         * A number offset used to achieve the 1-12 representation of the calendar
         */
        this._monthOffset = 1;
        /**
         * An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)
         */
        this.onDestroy$ = new Subject();
        /**
         * An event fired when a new month is selected
         */
        this.monthClicked = new EventEmitter();
    }
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.calendarService.focusEscapeFunction = this.focusEscapeFunction;
        this.calendarService.onFocusIdChange
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return _this.focusElement('#' + _this.id + '-fd-month-' + index); }));
        this.calendarService.onKeySelect
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return _this.selectMonth(index); }));
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    Object.defineProperty(CalendarMonthViewComponent.prototype, "currentMonth", {
        /** Get a number (1-12) representing the current month  */
        get: /**
         * Get a number (1-12) representing the current month
         * @return {?}
         */
        function () {
            return FdDate.getToday().month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarMonthViewComponent.prototype, "monthOffset", {
        /**  Getter for the private class member _monthOffset */
        get: /**
         * Getter for the private class member _monthOffset
         * @return {?}
         */
        function () {
            return this._monthOffset;
        },
        enumerable: true,
        configurable: true
    });
    /** Method for handling the mouse click event when a month is selected  */
    /**
     * Method for handling the mouse click event when a month is selected
     * @param {?} selectedMonth
     * @param {?=} event
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.selectMonth = /**
     * Method for handling the mouse click event when a month is selected
     * @param {?} selectedMonth
     * @param {?=} event
     * @return {?}
     */
    function (selectedMonth, event) {
        if (event) {
            event.stopPropagation();
        }
        this.monthSelected = selectedMonth + this.monthOffset;
        this.monthClicked.emit(this.monthSelected);
    };
    /** Method for handling the keyboard events (a11y) */
    /**
     * Method for handling the keyboard events (a11y)
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.onKeydownMonthHandler = /**
     * Method for handling the keyboard events (a11y)
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this.calendarService.onKeydownHandler(event, index);
    };
    /** Method that allows to focus elements inside this component */
    /**
     * Method that allows to focus elements inside this component
     * @param {?} elementSelector
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.focusElement = /**
     * Method that allows to focus elements inside this component
     * @param {?} elementSelector
     * @return {?}
     */
    function (elementSelector) {
        /** @type {?} */
        var elementToFocus = this.eRef.nativeElement.querySelector(elementSelector);
        if (elementToFocus) {
            elementToFocus.focus();
        }
    };
    Object.defineProperty(CalendarMonthViewComponent.prototype, "shortMonthNames", {
        /** Method that returns list of short month names from currently provided calendarI18n service */
        get: /**
         * Method that returns list of short month names from currently provided calendarI18n service
         * @return {?}
         */
        function () {
            return this.calendarI18n.getAllShortMonthNames();
        },
        enumerable: true,
        configurable: true
    });
    CalendarMonthViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fd-calendar-month-view',
                    template: "<div class=\"fd-calendar__months\">\n    <ul class=\"fd-calendar__list\">\n        <li class=\"fd-calendar__item\"\n            *ngFor=\"let month of shortMonthNames; let i = index\"\n            [ngClass]=\"{\n                'fd-calendar__item--current': i + monthOffset === currentMonth,\n                'is-selected': i + monthOffset === monthSelected\n            }\"\n            [attr.tabIndex]=\"i + monthOffset === monthSelected ? 0 : -1\"\n            [attr.id]=\"id + '-fd-month-' + i\"\n            (keydown)=\"onKeydownMonthHandler($event, i)\"\n            (click)=\"selectMonth(i, $event)\">\n            <span role=\"button\" class=\"fd-calendar__text\">\n                {{ month }}\n            </span>\n        </li>\n    </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[attr.id]': 'id + "-month-view"'
                    },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: CalendarI18n },
        { type: CalendarService }
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        id: [{ type: Input }],
        monthSelected: [{ type: Input }],
        focusEscapeFunction: [{ type: Input }],
        monthClicked: [{ type: Output }]
    };
    return CalendarMonthViewComponent;
}());
export { CalendarMonthViewComponent };
if (false) {
    /**
     * A number offset used to achieve the 1-12 representation of the calendar
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype._monthOffset;
    /**
     * An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype.onDestroy$;
    /**
     * The id of the calendar passed from the parent component
     * @type {?}
     */
    CalendarMonthViewComponent.prototype.id;
    /**
     * A number (1-12) representing the selected month
     * @type {?}
     */
    CalendarMonthViewComponent.prototype.monthSelected;
    /**
     * A function that handles escape focus
     * @type {?}
     */
    CalendarMonthViewComponent.prototype.focusEscapeFunction;
    /**
     * An event fired when a new month is selected
     * @type {?}
     */
    CalendarMonthViewComponent.prototype.monthClicked;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype.eRef;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype.calendarI18n;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthViewComponent.prototype.calendarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnVuZGFtZW50YWwtbmd4L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItdmlld3MvY2FsZW5kYXItbW9udGgtdmlldy9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBR3pEO0lBaUNJLG9DQUNZLElBQWdCLEVBQ2hCLEtBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLGVBQWdDO1FBSGhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCOzs7O1FBekIzQixpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQUd6QixlQUFVLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFnQnhELGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFPdEUsQ0FBQztJQUVKLGNBQWM7Ozs7O0lBQ2QsNkNBQVE7Ozs7SUFBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGVBQWUsQ0FB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QUc5QixrREFDeUU7Ozs7O0lBR3JFLDBDQUF3Qjs7Ozs7SUFDeEIsMkNBQWdDOzs7OztJQUNoQyxrREFBa0M7Ozs7O0lBQ2xDLHFEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZERhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmQtZGF0ZSc7XG5pbXBvcnQgeyBDYWxlbmRhckkxOG4gfSBmcm9tICcuLi8uLi9pMThuL2NhbGVuZGFyLWkxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuc2VydmljZSc7XG5cbi8qKiBDb21wb25lbnQgcmVwcmVzZW50aW5nIHRoZSBtb250aCB2aWV3IG9mIHRoZSBjYWxlbmRhci4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmQtY2FsZW5kYXItbW9udGgtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLmlkXSc6ICdpZCArIFwiLW1vbnRoLXZpZXdcIidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqIEEgbnVtYmVyIG9mZnNldCB1c2VkIHRvIGFjaGlldmUgdGhlIDEtMTIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhbGVuZGFyICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9udGhPZmZzZXQ6IG51bWJlciA9IDE7XG5cbiAgICAvKiogQW4gUnhKUyBTdWJqZWN0IHRoYXQgd2lsbCBraWxsIHRoZSBkYXRhIHN0cmVhbSB1cG9uIGNvbXBvbmVudOKAmXMgZGVzdHJ1Y3Rpb24gKGZvciB1bnN1YnNjcmliaW5nKSAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IG9uRGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgY2FsZW5kYXIgcGFzc2VkIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQgKi9cbiAgICBASW5wdXQoKVxuICAgIGlkOiBzdHJpbmc7XG5cbiAgICAvKiogQSBudW1iZXIgKDEtMTIpIHJlcHJlc2VudGluZyB0aGUgc2VsZWN0ZWQgbW9udGggKi9cbiAgICBASW5wdXQoKVxuICAgIG1vbnRoU2VsZWN0ZWQ6IG51bWJlcjtcblxuICAgIC8qKiBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBlc2NhcGUgZm9jdXMgKi9cbiAgICBASW5wdXQoKVxuICAgIGZvY3VzRXNjYXBlRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gICAgLyoqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWQgKi9cbiAgICBAT3V0cHV0KClcbiAgICByZWFkb25seSBtb250aENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhckkxOG46IENhbGVuZGFySTE4bixcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZVxuICAgICkge31cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmZvY3VzRXNjYXBlRnVuY3Rpb24gPSB0aGlzLmZvY3VzRXNjYXBlRnVuY3Rpb247XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uub25Gb2N1c0lkQ2hhbmdlXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaW5kZXggPT4gdGhpcy5mb2N1c0VsZW1lbnQoJyMnICsgdGhpcy5pZCArICctZmQtbW9udGgtJyArIGluZGV4KSlcbiAgICAgICAgO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLm9uS2V5U2VsZWN0XG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaW5kZXggPT4gdGhpcy5zZWxlY3RNb250aChpbmRleCkpXG4gICAgICAgIDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLm9uRGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgbnVtYmVyICgxLTEyKSByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgbW9udGggICovXG4gICAgZ2V0IGN1cnJlbnRNb250aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gRmREYXRlLmdldFRvZGF5KCkubW9udGg7XG4gICAgfVxuXG4gICAgLyoqICBHZXR0ZXIgZm9yIHRoZSBwcml2YXRlIGNsYXNzIG1lbWJlciBfbW9udGhPZmZzZXQgKi9cbiAgICBnZXQgbW9udGhPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoT2Zmc2V0O1xuICAgIH1cblxuICAgIC8qKiBNZXRob2QgZm9yIGhhbmRsaW5nIHRoZSBtb3VzZSBjbGljayBldmVudCB3aGVuIGEgbW9udGggaXMgc2VsZWN0ZWQgICovXG4gICAgc2VsZWN0TW9udGgoc2VsZWN0ZWRNb250aDogbnVtYmVyLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vbnRoU2VsZWN0ZWQgPSBzZWxlY3RlZE1vbnRoICsgdGhpcy5tb250aE9mZnNldDtcbiAgICAgICAgdGhpcy5tb250aENsaWNrZWQuZW1pdCh0aGlzLm1vbnRoU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qKiBNZXRob2QgZm9yIGhhbmRsaW5nIHRoZSBrZXlib2FyZCBldmVudHMgKGExMXkpICovXG4gICAgb25LZXlkb3duTW9udGhIYW5kbGVyKGV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uub25LZXlkb3duSGFuZGxlcihldmVudCwgaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqIE1ldGhvZCB0aGF0IGFsbG93cyB0byBmb2N1cyBlbGVtZW50cyBpbnNpZGUgdGhpcyBjb21wb25lbnQgKi9cbiAgICBmb2N1c0VsZW1lbnQoZWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFRvRm9jdXM6IEhUTUxFbGVtZW50ID0gdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICBpZiAoZWxlbWVudFRvRm9jdXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogTWV0aG9kIHRoYXQgcmV0dXJucyBsaXN0IG9mIHNob3J0IG1vbnRoIG5hbWVzIGZyb20gY3VycmVudGx5IHByb3ZpZGVkIGNhbGVuZGFySTE4biBzZXJ2aWNlICovXG4gICAgZ2V0IHNob3J0TW9udGhOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGVuZGFySTE4bi5nZXRBbGxTaG9ydE1vbnRoTmFtZXMoKTtcbiAgICB9XG59XG4iXX0=