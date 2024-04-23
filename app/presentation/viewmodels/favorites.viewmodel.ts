import Placard from "../../domain/models/placard";
import {IFavoritesUsecase} from "../../domain/usecases/favorites.usecase";
import {useState} from "react";
import {useFavorite} from "../../hooks/useFavorite";
import favorite from "../components/favorite";


export interface IFavoritesUseCaseProps{
    favoritesUseCase: IFavoritesUsecase
}
export interface IFavoritesViewmodel{
    addFavorite(key: number): Promise<void | null>
    removeFavorite(key: number): Promise<void | null>
}
export const FavoritesViewmodel = (
    {
        favoritesUseCase
    }: IFavoritesUseCaseProps
): IFavoritesViewmodel =>{

    const addFavorite = (key: number) =>{

        const temp = useFavorite.getState().favorites2.slice()
        temp.push(key)
        useFavorite.setState({favorites2: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite.getState().favorites2.slice()))

        return favoritesUseCase.add(key)
    }

    const removeFavorite = (key: number) =>{

        const temp = useFavorite.getState().favorites2.slice()
        const index = temp.indexOf(key)
        if(index !== -1){
            temp.splice(index, 1)
        }
        useFavorite.setState({favorites2: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite.getState().favorites2.slice()))

        return favoritesUseCase.remove(key)
    }

    return {
        addFavorite, removeFavorite
    }
}
