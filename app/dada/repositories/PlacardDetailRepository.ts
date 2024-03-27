import {IPlacardDetailRepository} from "../../domain/repositories/IPlacardDetailRepository";
import {IAPIProps} from "./PlacardsRepository";
import Placard from "../../domain/models/Placard";
import {PlacardResponse} from "../entities/PlacardResponse";
import {MapPlacardDetailToModel} from "./PlacardMapper";
import Config from "react-native-config";
import {getDataBoolean, StorageKeys} from "../../di/StorageUtil";

export const PlacardDetailRepository = (
    {
        api
    }: IAPIProps
): IPlacardDetailRepository =>{
    const getPlacardDetail = async (
        id: number,
        signal?: AbortSignal
    ):Promise<Placard | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(isMockData){
            const placardDetail = JSON.parse( '{"id":"5","author":"Alejandro Escamilla","width":5000,"height":3334,"url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"}')
            // console.log("Placard Detail Mock Data = "+ JSON.stringify(placardDetail))
            return MapPlacardDetailToModel(placardDetail)
        }else {
            const placardResult = await api.get(
                `/id/${id}/info`,
                false,
                { signal }
            )
            return MapPlacardDetailToModel(placardResult?.data)
        }
    }
    return {
        getPlacardDetail
    }
}
