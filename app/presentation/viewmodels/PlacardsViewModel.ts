import Placards from "../../domain/models/Placards";
import {IGetPlacardsUseCase} from "../../domain/usecases/IGetPlacardsUseCase";
import {PlacardsRequest} from "../../domain/entities/PlacardsRequest";

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
        return getPlacardsUseCase.execute(request)
    }

    return {
        getPlacards
    }
}
