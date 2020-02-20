import { Directive } from '@angular/core';

/**
 * The right side area of the Bar component.
 */
@Directive({
    selector: '[fd-bar-right]',
    host: {
        class: 'fd-bar__right'
    }
})
export class BarRightDirective { }
