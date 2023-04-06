export interface Cat {
    _id: string;
    tags: string[];
    owner: string | null;
    createdAt: string;
    updatedAt: string;
}

export type CatList = Cat[]


export interface CatComponentProps {
    cat: Cat
}

export type Tag = string;

export interface InteruptingCatListProps {
    tags: Tag[]
}
