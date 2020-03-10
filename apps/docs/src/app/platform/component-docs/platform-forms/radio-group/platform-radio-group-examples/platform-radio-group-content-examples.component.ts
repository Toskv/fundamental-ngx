import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'fdp-platform-radio-group-content-example',
    templateUrl: './platform-radio-group-content-example.component.html'
})
export class PlatformRadioGroupContentExampleComponent {
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
        example7: new FormControl('')
    });
}
