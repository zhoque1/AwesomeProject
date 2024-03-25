import {Book} from "../models/Book";
import {IBookRepository} from "../repositories/IBookRepository";

export interface IGetBookUseCase {
    getSampleBook(): Book;
}


