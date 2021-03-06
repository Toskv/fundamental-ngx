import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiComponent} from '../../../documentation/core-helpers/api/api.component';
import {SharedDocumentationModule} from '../../../documentation/shared-documentation.module';
import {API_FILES} from '../../api-files';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {MenuDocsComponent} from './menu-docs.component';
import {
    MenuExampleComponent,
    MenuGroupExampleComponent,
    MenuSeparatorExampleComponent
} from './examples/menu-examples.component';
import {MenuAddonExampleComponent} from './examples/menu-addon-examples.component';
import {MenuKeyboardSupportExampleComponent} from './examples/menu-keyboard-support-example.component';
import { MenuModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: MenuHeaderComponent,
        children: [
            { path: '', component: MenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.menu } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        MenuModule
    ],
    exports: [RouterModule],
    declarations: [
        MenuDocsComponent,
        MenuHeaderComponent,
        MenuExampleComponent,
        MenuAddonExampleComponent,
        MenuGroupExampleComponent,
        MenuSeparatorExampleComponent,
        MenuKeyboardSupportExampleComponent
    ]
})
export class MenuDocsModule {
}
