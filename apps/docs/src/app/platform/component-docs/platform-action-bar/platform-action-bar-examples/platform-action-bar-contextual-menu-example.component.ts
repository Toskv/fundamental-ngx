import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fdp-platform-action-bar-contextual-menu-example',
    templateUrl: './platform-action-bar-contextual-menu-example.component.html',
    styleUrls: ['./platform-action-bar-contextual-menu-example.component.scss']
})
export class PlatformActionbarWithContextualMenuExampleComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onBackBuutonClick() {
        alert('Back button clicked');
    }
}
