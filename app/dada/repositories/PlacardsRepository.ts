
import Placards from "../../domain/models/Placards";
import {IApi} from "../dataSources/network/api.interface";
import {PlacardsRequest} from "../../domain/requests/PlacardsRequest";
import {PlacardsResponse} from "../entities/PlacardsResponse";
import {MapPlacardsDataToModel} from "./PlacardsMapper";
import {IPlacardsRepository} from "../../domain/repositories/IPlacardsRepository";
import Config from "react-native-config";
import {getDataBoolean, StorageKeys} from "../../di/StorageUtil";

export interface IAPIProps {
    api: IApi
}

export const PlacardsRepository = (
    {
        api
    }: IAPIProps
): IPlacardsRepository => {
    const getPlacards = async (
        request: PlacardsRequest,
        signal?: AbortSignal
    ):Promise<Placards | null> =>{

        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        // console.log('Repository: '+ JSON.stringify(request))
        console.log("Mock data = "+ isMockData)
        // if(Config.MOCK_DATA === "true"){
        if(isMockData){
            const placards = JSON.parse( '{"data":[{"id":"5","author":"Alejandro Escamilla","width":5000,"height":3334,"url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"},' +
                '{"id":"6","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/tAKXap853rY","download_url":"https://picsum.photos/id/6/5000/3333"},' +
                '{"id":"7","author":"Alejandro Escamilla","width":4728,"height":3168,"url":"https://unsplash.com/photos/BbQLHCpVUqA","download_url":"https://picsum.photos/id/7/4728/3168"},' +
                '{"id":"8","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/xII7efH1G6o","download_url":"https://picsum.photos/id/8/5000/3333"},' +
                '{"id":"9","author":"Alejandro Escamilla","width":5000,"height":3269,"url":"https://unsplash.com/photos/ABDTiLqDhJA","download_url":"https://picsum.photos/id/9/5000/3269"}]}')
            // console.log("Placards Result Mock Data = "+ JSON.stringify(placards))
            return MapPlacardsDataToModel(placards)
        }else{
            const placardsResult: PlacardsResponse = await api.get(
                `/v2/list?page=${request.page}&&limit=${request.limit}`,
                false,
                { signal }
            )
            // console.log('Placards Result Data = '+ JSON.stringify(placardsResult))
            return MapPlacardsDataToModel(placardsResult)
        }
    }
    return {
        getPlacards
    };
};
