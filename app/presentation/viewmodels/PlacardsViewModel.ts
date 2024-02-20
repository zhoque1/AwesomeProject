import Placards from "../../domain/models/Placards";
import {IGetPlacardsUseCase} from "../../domain/useCases/GetPlacardsUseCase";
import {PlacardsRequest} from "../../dada/entities/PlacardsRequest";
import {PlacardsRepository} from "../../dada/repositories/PlacardsRepository";
import Api from "../../dada/dataSources/network/api";

export interface IPlacardsViewModel{
    getPlacards(
        page: number,
        limit: number
    ): Promise<Placards | null>
}

export const PlacardsViewModel = (
    getPlacardsUseCase: IGetPlacardsUseCase
): IPlacardsViewModel =>{
    const getPlacards = (
        page: number,
        limit: number
    ) => {
        const request: PlacardsRequest = {
            page,
            limit
        }
        return getPlacardsUseCase.execute(request, PlacardsRepository(Api()))
    }

    return {
        getPlacards
    }
}
