import { Tag } from "./tag";

export interface Metadata {
    title: string;
    author: string;
    isPublished: boolean;
    published: Date;
    tags: Tag[];
    thumbnail: string;
}