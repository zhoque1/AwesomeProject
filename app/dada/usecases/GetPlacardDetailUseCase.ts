import {IPlacardDetailRepository} from "../../domain/repositories/IPlacardDetailRepository";
import {IGetPlacardDetailUseCase} from "../../domain/usecases/IGetPlacardDetailUseCase";
import Placard from "../../domain/models/Placard";

export interface IRepositoryProps{
    placardDetailRepository: IPlacardDetailRepository
}

export const GetPlacardDetailUseCase = (
    {
        placardDetailRepository
    }: IRepositoryProps
): IGetPlacardDetailUseCase =>{
    return {
        execute: async (
            id: number
        ): Promise<Placard | null> => {
            return await placardDetailRepository.getPlacardDetail(id);
        }
    }
}
