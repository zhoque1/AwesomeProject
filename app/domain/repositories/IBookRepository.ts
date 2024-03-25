import {Book} from "../models/Book";

export interface IBookRepository {
    getBook(): Book;
}
