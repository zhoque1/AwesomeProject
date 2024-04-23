import {IAPIProps} from "./placards.repository";
import {getDataBoolean, StorageKeys} from "../../di/storage-util";
import {FavoritesRepositoryInterface} from "../../domain/repositories/favorites.repository.interface";

export const FavoritesRepository = (
    {
        api
    }: IAPIProps
): FavoritesRepositoryInterface =>{
    const add = async (
        key: number,
        signal?: AbortSignal
    ):Promise<void | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(!isMockData){
            console.log("Add favorite key = "+ JSON.stringify(key))
            return null
        }
    }
    const remove = async (
        key: number,
        signal?: AbortSignal
    ):Promise<void | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(!isMockData){
            console.log("Remove favorite key = "+ JSON.stringify(key))
            return null
        }
    }
    return {
        add, remove
    }
}
