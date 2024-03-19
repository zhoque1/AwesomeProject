import {Book} from "../../dada/dataSources/Book";
import {BookRepository} from "../../dada/repositories/BookRepository";

export interface BookService {
    getSampleBook(): Book;
}

export class BookServiceImpl implements BookService {
    bookRepo: BookRepository;

    constructor(bookRepo: BookRepository) {
        this.bookRepo = bookRepo;
    }

    getSampleBook(): Book {
        return this.bookRepo.getBook();
    }
}
