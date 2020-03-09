import { Component } from '@angular/core';
import { DialogService } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-popover-modal-example',
    templateUrl: './popover-modal-example.component.html'
})
export class PopoverModalExampleComponent {

    constructor(public modalService: DialogService) {}

}
