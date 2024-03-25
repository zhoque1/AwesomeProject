import {Book} from "../../domain/models/Book";
import {IBookRepository} from "../../domain/repositories/IBookRepository";

export class BookRepository implements IBookRepository {
    getBook(): Book {
        return new Book(123, 'Harry Potter');
    }
}
