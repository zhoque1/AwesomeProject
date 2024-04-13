import {GetBookUsecase} from "../../domain/usecases/get-book.usecase";
import {BookRepository} from "../../data/repositories/book.repository";

function getSampleBookData() {
    let bookRepository = new BookRepository();
    let getBookUseCase = new GetBookUsecase (bookRepository);
    return getBookUseCase.getSampleBook();
}

export default getSampleBookData;
