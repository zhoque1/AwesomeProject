import {IAPIProps} from "./placards.repository";
import {getDataBoolean, StorageKeys} from "../../di/storage-util";
import {IStudentRepository} from "../../domain/repositories/i-student.repository";


export const StudentRepository = (
    {
        api
    }: IAPIProps
): IStudentRepository =>{
    const add = async (
        key: number,
        signal?: AbortSignal
    ):Promise<void | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(!isMockData){
            console.log("Add student = "+ JSON.stringify(key))
            return null
        }
    }
    const remove = async (
        key: number,
        signal?: AbortSignal
    ):Promise<void | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(!isMockData){
            console.log("Remove student = "+ JSON.stringify(key))
            return null
        }
    }
    const get = async (
        key: number,
        signal?: AbortSignal
    ):Promise<string | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(isMockData){
            console.log("Get student = "+ JSON.stringify(key))
            return null
        }else{
            return "z"
        }
    }
    const all = async (
        signal?: AbortSignal
    ):Promise<string[] | null> =>{
        const isMockData = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        if(!isMockData){
            console.log("All student = ")
            return null
        }else{
            return ['a','b','c','d']
        }
    }

    return {
        add, remove, get, all
    }
}
