import {PlacardsRequest} from "../../domain/requests/PlacardsRequest";
import Placards from "../../domain/models/Placards";
import {IGetPlacardsUseCase} from "../../domain/usecases/IGetPlacardsUseCase";
import {IPlacardsRepository} from "../../domain/repositories/IPlacardsRepository";

export interface IRepositoryProps {
    placardsRepository: IPlacardsRepository
}
export const GetPlacardsUseCase = (
    {
        placardsRepository
    }: IRepositoryProps
): IGetPlacardsUseCase =>{
    return {
        execute: async (
            request: PlacardsRequest,
        ): Promise<Placards | null> => {
            return await placardsRepository.getPlacards(request);
        }
    }
}
