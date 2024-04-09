import { Tag } from "$lib/tag";

export interface Item {
    thumbnailUrl: string;
    title: string;
    createdTime: Date;
    author: string;
    tags: Tag[];
};