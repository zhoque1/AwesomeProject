import {BookRepositoryImpl} from "../../domain/models/bookrepositoryimpl";
import {BookServiceImpl} from "../../domain/usecases/BookUseCase";

function getSampleBookData() {
    let bookRepository = new BookRepositoryImpl();
    let bookService = new BookServiceImpl(bookRepository);
    return bookService.getSampleBook();
}

export default getSampleBookData;
