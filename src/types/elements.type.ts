export interface UnitElement {
    name: string;
    repeat?: string;
    children?: UnitElement[];
    body?: string;
}

export interface GroupElement {
    elements: UnitElement[];
}