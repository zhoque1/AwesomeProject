
import Placards from "../../domain/models/Placards";
import {IApi} from "../dataSources/network/api.interface";
import {PlacardsRequest} from "../../domain/entities/PlacardsRequest";
import {PlacardsResponse} from "../../domain/entities/PlacardsResponse";
import Config from "react-native-config";
import {MapPlacardsDataToModel} from "./PlacardsMapper";
import {IPlacardsRepository} from "../../domain/repositories/IPlacardsRepository";

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

        console.log('Repository: '+ JSON.stringify(request))

        const placardsResult: PlacardsResponse = await api.get(
            `/v2/list?page=${request.page}&&limit=${request.limit}`,
            false,
            { signal }
        )

        // console.log('Result1 = '+ JSON.stringify(placardsResult))

        return MapPlacardsDataToModel(placardsResult)
    }
    return {
        getPlacards
    };
};
