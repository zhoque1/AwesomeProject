import {PlacardDetailRepositoryInterface} from "../repositories/placard-detail.repository.interface";
import Placard from "../models/placard";

export interface IRepositoryProps{
    placardDetailRepository: PlacardDetailRepositoryInterface
}

export interface IGetPlacardDetailUseCase{
    execute(
        id: number
    ): Promise<Placard | null>
}

export const GetPlacardDetailUsecase = (
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
