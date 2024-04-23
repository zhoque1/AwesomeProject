import { create } from 'zustand'
import favorite from "../presentation/components/favorite";


export interface IFavorites{
    favorites2: Array<number>
}

export const useFavorite2 = create<IFavorites>((set, get) =>({
    favorites2: [],
}))

// export const addFavorite2 = (key: number) =>{
//     useFavorite2.setState((state: any) => ({
//         favorites2: state.favorites2.push(key)
//     }))
// }

// export const removeFavorite2 = (key: number) =>{
//     const temp = useFavorite2((state: any) => {
//         state.favorites2
//     }) as Array
//     const index = temp.indexOf
//     if(index !== -1){
//         temp.splice(index, 1)
//     }
//     useFavorite2.setState((state: any) => ({
//         favorites2: temp
//     }))
// }

