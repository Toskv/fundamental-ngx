import * as polyfills from '!raw-loader!./code-example-stack/polyfills.ts';
import * as maints from '!raw-loader!./code-example-stack/main.ts';
import sdk from '@stackblitz/sdk';
import { StackblitzParameters } from './interfaces/stackblitz-parameters';
import { StackblitzDependencies } from './stackblitz-dependencies';
import { StackblitzProject } from './interfaces/stackblitz-project';
import { Inject, Injectable } from '@angular/core';
import { Libraries } from '../../utilities/libraries';
import { ExampleFile } from '../code-example/example-file';

@Injectable()
export class StackblitzService {

    constructor (
        @Inject('CURRENT_LIB') private currentLib: Libraries
    ) {}

    get defaultProjectInfo(): StackblitzProject {
        return {
            files: {
                'src/main.ts': maints.default,
                'src/polyfills.ts': polyfills.default,
                'src/styles.scss': ''
            },
            title: 'Fundamental-NGX Example',
            description: 'Generated for you by fundamental-ngx team',
            template: 'angular-cli',
            tags: ['stackblitz', 'sdk'],
            dependencies: StackblitzDependencies.GetDependencies()
        };
    };

    openCode(exampleFiles: ExampleFile[]): void {

        const defaultProjectInfo = this.defaultProjectInfo;

        if (exampleFiles.length === 1) {

        }
        const parameters = this.getParameters(exampleFiles.find(file => file.language === 'html').fileName);

        exampleFiles.forEach((example: ExampleFile) => {

            if (example.entryComponent !== undefined) {
                parameters.app_module_entryComponents = example.entryComponent;
            }
            if (example.declarationArray !== undefined) {
                parameters.app_module_declarationArray = example.declarationArray;
            }
            if (example.imports !== undefined) {
                parameters.app_module_imports = example.imports;
            }

            if (example.language === 'html') {
                const _pathHTML = this.getFilePath(example.fileName, 'html');
                defaultProjectInfo.files[_pathHTML] = example.code.default;
                const _pathSCSS = this.getFilePath(example.fileName, 'scss');
                defaultProjectInfo.files[_pathSCSS] = example.scssFileCode ? example.scssFileCode.default : '';

                if (example.secondFile) {
                    const _pathTS = this.getFilePath(example.secondFile, 'ts');
                    defaultProjectInfo.files[_pathTS] = this.getDefaultTypescriptFile(example.secondFile);
                } else if (example.typescriptFileCode) {
                    const _pathTS = this.getFilePath(example.fileName, 'ts');
                    defaultProjectInfo.files[_pathTS] = example.typescriptFileCode.default;
                }
            }

            if (example.language === 'typescript') {
                let pathTs: string;
                if (example.thirdFile) {
                    pathTs = this.getFilePath(example.thirdFile, 'ts');
                } else if (example.secondFile) {
                    pathTs = this.getFilePath(example.secondFile, 'ts');
                } else {
                    pathTs = this.getFilePath(example.fileName, 'ts');
                }
                defaultProjectInfo.files[pathTs] = example.code.default
            }
        });

        defaultProjectInfo.files['src/app/app.module.ts'] = this.getModule(parameters);

        defaultProjectInfo.files['src/index.html'] = `
            <link rel="stylesheet" href="node_modules/fundamental-styles/dist/fonts.css"></link>
            <link rel="stylesheet" href="node_modules/fundamental-styles/dist/icon.css"></link>
            <${parameters.html_tag}></${parameters.html_tag}>
        `;


        sdk.openProject(<any>defaultProjectInfo);
    }

    private getDefaultTypescriptFile(fileName: string): string {

        const libraryPrefix = this.getLibraryPrefix();
        const componentName: string = this.transformSnakeCaseToPascalCase(fileName);

        return `import { Component } from '@angular/core';

            @Component({
                selector: '${libraryPrefix}${fileName}',
                templateUrl: './${fileName}.component.html',
                styleUrls: ['./${fileName}.component.scss']
            })
            export class ${componentName} {}`
        ;
    }

    private getLibraryPrefix(): string {
        if (this.currentLib === 'platform') {
            return 'fdp-';
        } else {
            return 'fd-';
        }
    }

    private getFilePath(fileName: string, extension: string): string {
        return ('src/app/' + fileName + '.component.' + extension);
    }

    /** this function transform that-word, or that_word to ThatWord */
    private transformSnakeCaseToPascalCase(snakeCase: string): string {
        if (snakeCase) {
            const snakeToCamel = str => str.replace(/([-_]\w)/g, g => g[1].toUpperCase());
            const camelCase = snakeToCamel(snakeCase);
            return camelCase[0].toUpperCase() + camelCase.substr(1);
        } else {
            return '';
        }
    }

    private getParameters(fileName: string): StackblitzParameters {

        const parameters: StackblitzParameters = {};
        parameters.html_tag = this.getLibraryPrefix() + fileName;
        parameters.app_module = 'AppModule';
        parameters.app_module_file = 'app.module';
        parameters.app_component = this.transformSnakeCaseToPascalCase(fileName);
        parameters.app_component_basis = fileName + '.component';
        parameters.app_component_html = fileName + '.component.html';
        parameters.app_component_ts = fileName + '.component.ts';
        parameters.app_component_html_path = this.getFilePath(fileName, 'html');
        parameters.app_component_ts_path = this.getFilePath(fileName, 'ts');

        parameters.app_app_component = `
            import { Component } from '@angular/core';
    
            @Component({
                selector: '${parameters.html_tag}',
                templateUrl: './${parameters.app_component_html}'
            })
            export class ${parameters.app_component} {}
        `;

        return parameters;
    }

    private getModule(parameters: StackblitzParameters): string {
        return `import { BrowserModule } from '@angular/platform-browser';
                import { NgModule } from '@angular/core';
                import { FormsModule, ReactiveFormsModule } from '@angular/forms';
                import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
                import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
                import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
                import { HttpClientModule, HttpClient } from '@angular/common/http';
                import { CdkTableModule } from '@angular/cdk/table';
                import { DragDropModule } from '@angular/cdk/drag-drop';
                import {RouterModule, Routes} from '@angular/router';
                import { ${parameters.app_component} } from './${parameters.app_component_basis}';
                ${parameters.app_module_imports}

                @NgModule({
                  declarations: [
                    ${parameters.app_component},${parameters.app_module_declarationArray}
                  ],
                  imports: [
                    BrowserModule,
                    FormsModule,
                    HttpClientModule,
                    DragDropModule,
                    RouterModule.forRoot([{path: '#', component:${parameters.app_component}}],
                    { useHash: true }),
                    ReactiveFormsModule,
                    FundamentalNgxCoreModule,
                    FundamentalNgxPlatformModule,
                    BrowserAnimationsModule
                  ],
                  providers: [],
                  entryComponents: [${parameters.app_module_entryComponents}],
                  bootstrap: [${parameters.app_component}]
                })
                export class ${parameters.app_module} { }
            `;
    }
}

const app_component_module = ``;
