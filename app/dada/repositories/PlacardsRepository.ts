
import Placards from "../../domain/models/Placards";
import {IApi} from "../dataSources/network/api.interface";
import {PlacardsRequest} from "../entities/PlacardsRequest";
import {PlacardsResponse} from "../entities/PlacardsResponse";
import Config from "react-native-config";
import {MapPlacardsDataToModel} from "./PlacardsMapper";


export interface IPlacardsRepository{
    getPlacards(request: PlacardsRequest, signal?: AbortSignal): Promise<Placards | null>;
}

export const PlacardsRepository = (api: IApi): IPlacardsRepository => {
    const getPlacards = async (
        request: PlacardsRequest,
        signal?: AbortSignal
    ):Promise<Placards | null> =>{

        console.log('Repository: '+ JSON.stringify(request))

        const placardsResult: PlacardsResponse = await api.get(
            `https://picsum.photos/v2/list?page=1&&limit=1`,
            false,
            { signal }
        )

        console.log('Result1 = '+ JSON.stringify(placardsResult))

        return MapPlacardsDataToModel(placardsResult)
    }
    return {
        getPlacards
    };
};
