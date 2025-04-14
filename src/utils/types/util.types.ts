export type Optional<T> = T | undefined | null; 

export interface Person{
    id: string;
    name: {
        first: string;
        last: string;
        full: string;
    }
}

export interface AuditingType<P extends Person | string>{
    // iso string
    createdAt?: string;
    // person type
    createdBy?: P;
    // iso string
    updatedAt?: string;
    // person type
    updatedBy?: P;
} 

export interface DropdownProps{
    value: string | number
    label: string
    position: number
}