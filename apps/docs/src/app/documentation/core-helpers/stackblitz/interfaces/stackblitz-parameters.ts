export interface StackblitzFile {
    path: string,
    name: string,
    basis: string
    selector: string
}


export interface StackblitzParameters {
    tsFiles: StackblitzFile[];

}
