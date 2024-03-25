import {BookRepository} from "../../dada/repositories/BookRepository";
import {GetBookUseCase} from "../../dada/usecases/GetBookUseCase";

function getSampleBookData() {
    let bookRepository = new BookRepository();
    let getBookUseCase = new GetBookUseCase (bookRepository);
    return getBookUseCase.getSampleBook();
}

export default getSampleBookData;
