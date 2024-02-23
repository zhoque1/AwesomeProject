import {PlacardsRequest} from "../../domain/entities/PlacardsRequest";
import Placards from "../../domain/models/Placards";
import {IGetPlacardsUseCase} from "../../domain/usecases/IGetPlacardsUseCase";
import {IPlacardsRepository} from "../../domain/repositories/IPlacardsRepository";

export const GetPlacardsUseCase = (
    repository: IPlacardsRepository,
): IGetPlacardsUseCase =>{
    return {
        execute: async (
            request: PlacardsRequest,
            // repository: IPlacardsRepository,
        ): Promise<Placards | null> => {
            return await repository.getPlacards(request);
        }
    }
}
