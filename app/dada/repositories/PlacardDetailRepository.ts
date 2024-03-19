import {IPlacardDetailRepository} from "../../domain/repositories/IPlacardDetailRepository";
import {IAPIProps} from "./PlacardsRepository";
import Placard from "../../domain/models/Placard";
import {PlacardResponse} from "../entities/PlacardResponse";
import {MapPlacardDetailToModel} from "./PlacardMapper";

export const PlacardDetailRepository = (
    {
        api
    }: IAPIProps
): IPlacardDetailRepository =>{
    const getPlacardDetail = async (
        id: number,
        signal?: AbortSignal
    ):Promise<Placard | null> =>{
        const placardResult: PlacardResponse = await api.get(
            `/id/${id}/info`,
            false,
            { signal }
        )
        return MapPlacardDetailToModel(placardResult)
    }
    return {
        getPlacardDetail
    }
}
