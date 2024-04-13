import {PlacardsRequestModel} from "../requests/placards-request.model";
import Placards from "../models/placards";
import {PlacardsRepositoryInterface} from "../repositories/placards.repository.interface";

export interface IRepositoryProps {
    placardsRepository: PlacardsRepositoryInterface
}

export interface IGetPlacardsUseCase{
    execute(
        request: PlacardsRequestModel,
    ): Promise<Placards | null>
}
export const GetPlacardsUsecase = (
    {
        placardsRepository
    }: IRepositoryProps
): IGetPlacardsUseCase =>{
    return {
        execute: async (
            request: PlacardsRequestModel,
        ): Promise<Placards | null> => {
            return await placardsRepository.getPlacards(request);
        }
    }
}
