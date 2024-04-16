import { Tag } from "$lib/tag";

export interface Item {
    id: string;
    thumbnailUrl: string;
    title: string;
    createdTime: Date;
    author: string;
    tags: Tag[];
};