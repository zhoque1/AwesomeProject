import {PlacardDetailRepositoryInterface} from "../../domain/repositories/placard-detail.repository.interface";
import {IAPIProps} from "./placards.repository";
import Placard from "../../domain/models/placard";
import {PlacardResponse} from "../entities/placard.response";
import {MapPlacardDetailToModel} from "../dataSources/mappers/placard.mapper";
import Config from "react-native-config";
import {getDataBoolean, StorageKeys} from "../../di/storage-util";

export const PlacardDetailRepository = (
    {
        api
    }: IAPIProps
): PlacardDetailRepositoryInterface =>{
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
