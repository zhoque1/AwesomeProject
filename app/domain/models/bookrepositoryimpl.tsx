import {Book} from "../../dada/dataSources/Book";
import {BookRepository} from "../../dada/repositories/BookRepository";

export class BookRepositoryImpl implements BookRepository {
    getBook(): Book {
        return new Book(123, 'Harry Potter');
    }
}
