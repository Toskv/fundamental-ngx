import { Component } from '@angular/core';

@Component({
    selector: 'fd-select-view-value-example',
    templateUrl: './select-view-value-example.component.html'
})
export class SelectViewValueExampleComponent {
    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];
    selectedValue: string;

    customViewValue(value: string): string {
        return `I love ${value}!`
    }
}
