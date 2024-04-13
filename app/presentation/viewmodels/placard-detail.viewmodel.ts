import {IGetPlacardDetailUseCase} from "../../domain/usecases/get-placard-detail.usecase";
import Placard from "../../domain/models/placard";

export interface IPlacardDetailUseCaseProps{
    getPlacardDetailUseCase: IGetPlacardDetailUseCase
}

export interface IPlacardDetailViewModel{
    getPlacardDetail(id: number): Promise<Placard | null>
}

export const PlacardDetailViewmodel = (
    {
        getPlacardDetailUseCase
    }: IPlacardDetailUseCaseProps
): IPlacardDetailViewModel =>{
    const getPlacardDetail = (
        id: number
    ) =>{
        return getPlacardDetailUseCase.execute(id)
    }
    return {
        getPlacardDetail
    }
}
