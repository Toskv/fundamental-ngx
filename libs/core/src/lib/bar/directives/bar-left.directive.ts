import { Directive } from '@angular/core';

/**
 * The left side area of the Bar component.
 */
@Directive({
    selector: '[fd-bar-left]',
    host: {
        class: 'fd-bar__left'
    }
})
export class BarLeftDirective { }
