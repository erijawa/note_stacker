import { Category } from "./category";

export interface Post {
  id: string;
  comment: string;
  url: string;
  categories: Category[];
}