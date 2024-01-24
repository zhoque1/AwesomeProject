import {Book} from "../dataSources/Book";

export interface BookRepository {
    getBook(): Book;
}
