export interface StackblitzFileObject {
    path: string,
    name: string
}

export class StackblitzModuleWrapper {
    private defaultModules: Array<StackblitzFileObject> = [
        { name: 'BrowserModule', path: '@angular/platform-browser' },
        { name: 'NgModule', path: '@angular/core' },
        { name: 'FormsModule', path: '@angular/forms' },
        { name: 'ReactiveFormsModule', path: '@angular/forms' },
        { name: 'BrowserAnimationsModule', path: '@angular/platform-browser/animations' },
        { name: 'FundamentalNgxCoreModule', path: '@fundamental-ngx/core' },
        { name: 'FundamentalNgxPlatformModule', path: '@fundamental-ngx/platform' },
        { name: 'HttpClientModule', path: '@angular/common/http' },
        { name: 'HttpClient', path: '@angular/common/http' },
        { name: 'CdkTableModule', path: '@angular/cdk/table' },
        { name: 'DragDropModule', path: '@angular/cdk/drag-drop' },
        { name: 'RouterModule', path: '@angular/router' },
        { name: 'Routes', path: '@angular/router' },
    ];


}
