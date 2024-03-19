import {IGetPlacardDetailUseCase} from "../../domain/usecases/IGetPlacardDetailUseCase";
import Placard from "../../domain/models/Placard";

export interface IPlacardDetailUseCaseProps{
    getPlacardDetailUseCase: IGetPlacardDetailUseCase
}

export interface IPlacardDetailViewModel{
    getPlacardDetail(id: number): Promise<Placard | null>
}

export const PlacardDetailViewModel = (
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
