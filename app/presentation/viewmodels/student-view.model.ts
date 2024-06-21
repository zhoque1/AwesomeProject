import {IFavoritesUsecase} from "../../domain/usecases/favorites.usecase";
import {IFavorites, useFavorite} from "../../hooks/useFavorite";
import {IStudentUsecase} from "../../domain/usecases/student-use.case";


export interface IStudentUseCaseProps{
    studentUseCase: IStudentUsecase
}
export interface IStudentViewModel {
    add(key: number): Promise<void | null>
    remove(key: number): Promise<void | null>
    get(key: number): Promise<string | null>
    all(): Promise<string[] | null>
}
export const StudentViewModel = (
    {
        studentUseCase
    }: IStudentUseCaseProps
): IStudentViewModel =>{

    const add = (key: number) =>{
        return studentUseCase.add(key)
    }

    const remove = (key: number) =>{
        return studentUseCase.remove(key)
    }

    const get = (key: number) =>{
        return studentUseCase.get(key)
    }

    const all = () =>{
        return studentUseCase.all()
    }


    return {
        add,
        remove,
        get,
        all
    }
}
