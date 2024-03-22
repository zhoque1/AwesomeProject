import {MMKV} from "react-native-mmkv";
import {storage} from "../../index";

export const StorageKeys ={
    USE_MOCK_DATA: 'UseMockData',
    USE_PRD: 'UsePrd',
    USE_RELEASE: 'UseRelease',
    USE_DEBUG: 'UseDebug'

}

export const storeData = (StorageKey: string, value: any) => {
    storage.set(StorageKey, value)
}

export const getDataBoolean = (StorageKey: string) : boolean =>{
    return <boolean>storage.getBoolean(StorageKey)
}

export const getDataNumber = (StorageKey: string) : number =>{
    return <number>storage.getNumber(StorageKey)
}

export const getDataString = (StorageKey: string) : string =>{
    return <string>storage.getString(StorageKey)
}

export const getAllKeys = () =>{
    return storage.getAllKeys()
}

// const storeKey = '@storage_Key'
// const test = StorageKeys.USE_MOCK_DATA
// export const storeData = async (
//     StorageKey: string, value: any) => {
//     try {
//         await AsyncStorage.setItem(StorageKey, value)
//     } catch (e) {
//         // saving error
//     }
// }



// export const getData = async (StorageKey: string) => {
//     try {
//         const value = await AsyncStorage.getItem(StorageKey)
//         if(value !== null) {
//             // value previously stored
//         }
//     } catch(e) {
//         // error reading value
//     }
// }

// const test1 = getData(StorageKeys.USE_MOCK_DATA)
