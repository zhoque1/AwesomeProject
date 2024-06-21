import {IStudentRepository} from "../repositories/i-student.repository";


export interface IRepositoryProps{
    studentRepository: IStudentRepository
}

export interface IStudentUsecase{
    add(key: number): Promise<void | null>
    remove(key: number): Promise<void | null>
    get(key: number): Promise<string | null>
    all():Promise<string[] | null>
}

export const StudentUsecase = (
    {
        studentRepository
    }: IRepositoryProps
): IStudentUsecase =>{
    return {
        add: async (key: number): Promise<void | null> => {
            return await studentRepository.add(key);
        },
        remove: async (key: number): Promise<void | null> => {
            return await studentRepository.remove(key);
        },
        get: async (key: number): Promise<string | null> =>{
            return await studentRepository.get(key);
        },
        all: async (): Promise<string[] | null> =>{
            return await studentRepository.all();
        }

    }
}
