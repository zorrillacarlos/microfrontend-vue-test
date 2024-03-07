export interface ICell {
    id: string;
    value: string;
}

export interface IRowValues {
    id: string;
    values: ICell[];
}

export interface IRow {
    row: IRowValues;
}