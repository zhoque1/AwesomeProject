import Placard from "../../domain/models/placard";
import {IFavoritesUsecase} from "../../domain/usecases/favorites.usecase";
import {useState} from "react";
import {useFavorite2} from "../../hooks/useFavorite2";
import favorite from "../components/favorite";


export interface IFavoritesUseCaseProps{
    favoritesUseCase: IFavoritesUsecase
}
export interface IFavoritesViewmodel{
    getFavorites: (key: number) => boolean
    addFavorite(key: number): Promise<void | null>
    removeFavorite(key: number): Promise<void | null>
}
export const FavoritesViewmodel = (
    {
        favoritesUseCase
    }: IFavoritesUseCaseProps
): IFavoritesViewmodel =>{

    const getFavorites = (key: number) =>{
        return (useFavorite2((state) => state.favorites2?.indexOf(key)?? 0) >= 0)//.getState().favorites2?.indexOf(key)?? 0) >= 0
    }
    const addFavorite = (key: number) =>{

        const temp = useFavorite2.getState().favorites2.slice()
        temp.push(key)
        useFavorite2.setState({favorites2: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite2.getState().favorites2.slice()))

        return favoritesUseCase.add(key)
    }

    const removeFavorite = (key: number) =>{

        const temp = useFavorite2.getState().favorites2.slice()
        const index = temp.indexOf(key)
        if(index !== -1){
            temp.splice(index, 1)
        }
        useFavorite2.setState({favorites2: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite2.getState().favorites2.slice()))

        return favoritesUseCase.remove(key)
    }

    return {
        getFavorites,
        addFavorite, removeFavorite
    }
}
