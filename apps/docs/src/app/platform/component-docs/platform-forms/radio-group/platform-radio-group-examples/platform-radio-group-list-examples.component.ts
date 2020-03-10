import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'fdp-platform-radio-group-list-example',
    templateUrl: './platform-radio-group-list-example.component.html'
})
export class PlatformRadioGroupListExampleComponent {
    options = ['Option 1', 'Option 2', 'Option 3'];
    name = 'option';
    compact = '';
    disabled = 'false';
    state = 'default';
    hasNoValue = 'true';
    noValueLabel = '(No selection)';

    favoriteSeason: string = '';
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    customForm = new FormGroup({
        example5: new FormControl(''),
        example6: new FormControl(''),
    });
}
