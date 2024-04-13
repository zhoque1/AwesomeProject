import {Book} from "../../domain/models/book";
import {BookRepositoryInterface} from "../../domain/repositories/book.repository.interface";

export class BookRepository implements BookRepositoryInterface {
    getBook(): Book {
        return new Book(123, 'Harry Potter');
    }
}
