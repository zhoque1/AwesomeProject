import Placards from "../../domain/models/placards";
import {IGetPlacardsUseCase} from "../../domain/usecases/get-placards.usecase";
import {PlacardsRequestModel} from "../../domain/requests/placards-request.model";

export interface IPlacardsUseCaseProps {
    getPlacardsUseCase: IGetPlacardsUseCase
}
export interface IPlacardsViewModel{
    getPlacards(
        page: number,
        limit: number
    ): Promise<Placards | null>
}

export const PlacardsViewmodel = (
        {
            getPlacardsUseCase
        }: IPlacardsUseCaseProps
): IPlacardsViewModel =>{
    const getPlacards = (
        page: number,
        limit: number
    ) => {
        const request: PlacardsRequestModel = {
            page,
            limit
        }
        return getPlacardsUseCase.execute(request)
    }

    return {
        getPlacards
    }
}
