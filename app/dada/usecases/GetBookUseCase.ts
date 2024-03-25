import {IBookRepository} from "../../domain/repositories/IBookRepository";
import {Book} from "../../domain/models/Book";
import {IGetBookUseCase} from "../../domain/usecases/IGetBookUseCase";

export class GetBookUseCase implements IGetBookUseCase {
    bookRepo: IBookRepository;

    constructor(bookRepo: IBookRepository) {
        this.bookRepo = bookRepo;
    }

    getSampleBook(): Book {
        return this.bookRepo.getBook();
    }
}
