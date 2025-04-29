export enum OrientationType{
    ROW = 'row',
    COLUMN = 'column'
}

export enum FormVariantType{
    BASIC = 'basic'
}

export interface FormLayout{
    // styling variant defined in a form variant switcher
    variant: FormVariantType;
    // orientation of elements
    orientation: OrientationType;
    // column/row sizes
    elementSizes?: Record<number, number>;
    // field ids and the row/column id they are on
    elements: Record<number, string[]>;
}