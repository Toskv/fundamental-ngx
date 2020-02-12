export interface ExampleFile {
    code: {
        default: string
    };
    scssFileCode?: {
        default: string
    };
    standalone?: boolean;
    language: string;
    fileName?: string;
    entryComponent?: boolean;
    componentName?: string;
    selectorName?: string;
    main?: boolean;
}
