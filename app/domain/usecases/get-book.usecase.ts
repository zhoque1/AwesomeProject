import {BookRepositoryInterface} from "../repositories/book.repository.interface";
import {Book} from "../models/book";

export interface IGetBookUseCase {
    getSampleBook(): Book;
}

export class GetBookUsecase implements IGetBookUseCase {
    bookRepo: BookRepositoryInterface;

    constructor(bookRepo: BookRepositoryInterface) {
        this.bookRepo = bookRepo;
    }

    getSampleBook(): Book {
        return this.bookRepo.getBook();
    }
}
