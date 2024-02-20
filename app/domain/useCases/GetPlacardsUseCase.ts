
import {IPlacardsRepository} from "../../dada/repositories/PlacardsRepository";
import Placards from "../models/Placards";
import {PlacardsRequest} from "../../dada/entities/PlacardsRequest";

export interface IGetPlacardsUseCase{
    execute(
        request: PlacardsRequest,
        repository: IPlacardsRepository,
    ): Promise<Placards | null>
}

export const GetPlacardsUseCase = (): IGetPlacardsUseCase =>{
    return {
        execute: async (
            request: PlacardsRequest,
            repository: IPlacardsRepository,
        ): Promise<Placards | null> => {
            return await repository.getPlacards(request);
        }
    }
}
