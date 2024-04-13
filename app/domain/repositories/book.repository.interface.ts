import {Book} from "../models/book";

export interface BookRepositoryInterface {
    getBook(): Book;
}
