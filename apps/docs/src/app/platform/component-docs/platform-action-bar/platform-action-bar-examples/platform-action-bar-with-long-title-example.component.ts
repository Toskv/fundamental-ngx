import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'fdp-platform-action-bar-with-long-title-example',
    templateUrl: './platform-action-bar-with-long-title-example.component.html',
    styleUrls: ['./platform-action-bar-with-long-title-example.component.scss']
})
export class PlatformActionbarWithLongPageTitleExampleComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onBackBuutonClick() {
        alert('Back button clicked');
    }
}
