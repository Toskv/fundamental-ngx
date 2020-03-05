import { Component } from '@angular/core';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

import * as selectBasicHtml from '!raw-loader!./examples/select-basic-example/select-basic-example.component.html';
import * as selectBasicTs from '!raw-loader!./examples/select-basic-example/select-basic-example.component.ts';

import * as selectStateHtml from '!raw-loader!./examples/select-state-example/select-state-example.component.html';
import * as selectStateTs from '!raw-loader!./examples/select-state-example/select-state-example.component.ts';

import * as selectProgressiveHtml from '!raw-loader!./examples/select-programmatic-example/select-programmatic-example.component.html';
import * as selectProgressiveScss from '!raw-loader!./examples/select-programmatic-example/select-programmatic-example.component.scss';
import * as selectProgressiveTs from '!raw-loader!./examples/select-programmatic-example/select-programmatic-example.component.ts';

import * as selectNestedHtml from '!raw-loader!./examples/select-nested-options/select-nested-options.component.html';
import * as selectNestedTs from '!raw-loader!./examples/select-nested-options/select-nested-options.component.ts';
import * as selectNestedScss from '!raw-loader!./examples/select-nested-options/select-nested-options.component.scss';

import * as customTriggerHtml from '!raw-loader!./examples/select-custom-trigger/select-custom-trigger.component.html';
import * as customTriggerTs from '!raw-loader!./examples/select-custom-trigger/select-custom-trigger.component.ts';
import * as customTriggerScss from '!raw-loader!./examples/select-custom-trigger/select-custom-trigger.component.scss';

import * as selectAddingHtml from '!raw-loader!./examples/select-adding-example/select-adding-example.component.html';
import * as selectAddingScss from '!raw-loader!./examples/select-adding-example/select-adding-example.component.scss';
import * as selectAddingTs from '!raw-loader!./examples/select-adding-example/select-adding-example.component.ts';

import * as selectFormHtml from '!raw-loader!./examples/select-forms/select-forms.component.html';
import * as selectFormTs from '!raw-loader!./examples/select-forms/select-forms.component.ts';

import * as selectViewValueHtml from '!raw-loader!./examples/select-view-value-example/select-view-value-example.component.html';
import * as selectViewValueTs from '!raw-loader!./examples/select-view-value-example/select-view-value-example.component.ts';

import * as selectMaxHeightHtml from '!raw-loader!./examples/select-height/select-max-height-example.component.html';
import * as selectMaxHeightTs from '!raw-loader!./examples/select-height/select-max-height-example.component.ts';

import * as selectSemanticStateHtml from '!raw-loader!./examples/select-semantic-state-example/select-semantic-state-example.component.html';
import * as selectSemanticStateTs from '!raw-loader!./examples/select-semantic-state-example/select-semantic-state-example.component.ts';

@Component({
    selector: 'fd-select-docs',
    templateUrl: './select-docs.component.html'
})
export class SelectDocsComponent {
    selectBasic: ExampleFile[] = [
        {
            language: 'html',
            code: selectBasicHtml,
            fileName: 'select-basic-example',
            typescriptFileCode: selectBasicTs,
            component: 'SelectBasicExampleComponent'
        }
    ];

    selectState: ExampleFile[] = [
        {
            language: 'html',
            code: selectStateHtml,
            fileName: 'select-state-example',
            typescriptFileCode: selectStateTs,
            component: 'SelectStateExampleComponent'
        }
    ];

    selectProgrammatic: ExampleFile[] = [
        {
            language: 'html',
            code: selectProgressiveHtml,
            fileName: 'select-programmatic-example',
            scssFileCode: selectProgressiveScss

        },
        {
            language: 'typescript',
            component: 'SelectProgrammaticExampleComponent',
            code: selectProgressiveTs,
            fileName: 'select-programmatic-example',
        }
    ];

    selectExtendedOptions: ExampleFile[] = [
        {
            language: 'html',
            code: selectNestedHtml,
            fileName: 'select-nested-options',
            typescriptFileCode: selectNestedTs,
            component: 'SelectNestedOptionsComponent',
            scssFileCode: selectNestedScss
        }
    ];

    customSelectTemplate: ExampleFile[] = [
        {
            language: 'html',
            code: customTriggerHtml,
            fileName: 'select-custom-trigger',
            typescriptFileCode: customTriggerTs,
            component: 'SelectCustomTriggerComponent',
            scssFileCode: customTriggerScss
        }
    ];

    selectAdding: ExampleFile[] = [
        {
            language: 'html',
            code: selectAddingHtml,
            fileName: 'select-adding-example',
            scssFileCode: selectAddingScss
        },
        {
            language: 'typescript',
            component: 'SelectAddingExampleComponent',
            code: selectAddingTs,
            fileName: 'select-adding-example',
        }
    ];

    selectForm: ExampleFile[] = [
        {
            language: 'html',
            code: selectFormHtml,
            fileName: 'select-forms',

        },
        {
            language: 'typescript',
            component: 'SelectFormsComponent',
            code: selectFormTs,
            fileName: 'select-forms',
        }
    ];

    selectMaxHeight: ExampleFile[] = [
        {
            language: 'html',
            code: selectMaxHeightHtml,
            fileName: 'select-max-height-example',
            typescriptFileCode: selectMaxHeightTs,
            component: 'SelectMaxHeightExampleComponent'
        }
    ];

    selectViewValue: ExampleFile[] = [
        {
            language: 'html',
            code: selectViewValueHtml,
            fileName: 'select-view-value-example',
        },
        {
            language: 'typescript',
            component: 'SelectViewValueExampleComponent',
            code: selectViewValueTs,
            fileName: 'select-view-value-example',
        }
    ];
    selectSemantic: ExampleFile[] = [
        {
            language: 'html',
            code: selectSemanticStateHtml,
            fileName: 'select-types-example',
            typescriptFileCode: selectSemanticStateTs,
            component: 'SelectTypesExampleComponent'
        }
    ];
}
