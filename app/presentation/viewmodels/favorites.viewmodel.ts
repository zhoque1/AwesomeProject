import {IFavoritesUsecase} from "../../domain/usecases/favorites.usecase";
import {IFavorites, useFavorite} from "../../hooks/useFavorite";


export interface IFavoritesUseCaseProps{
    favoritesUseCase: IFavoritesUsecase
}
export interface IFavoritesViewmodel{
    addFavorite(key: number): Promise<void | null>
    removeFavorite(key: number): Promise<void | null>
    isFavorite(k: number): boolean
}
export const FavoritesViewmodel = (
    {
        favoritesUseCase
    }: IFavoritesUseCaseProps
): IFavoritesViewmodel =>{

    const addFavorite = (key: number) =>{

        const temp = useFavorite.getState().favorites
        temp.push(key)
        useFavorite.setState({favorites: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite.getState().favorites.slice()))

        return favoritesUseCase.add(key)
    }

    const removeFavorite = (key: number) =>{

        const temp = useFavorite.getState().favorites
        const index = temp.indexOf(key)
        if(index !== -1){
            temp.splice(index, 1)
        }
        useFavorite.setState({favorites: temp})
        // console.log("testing list from viewmodel = "+ JSON.stringify(useFavorite.getState().favorites.slice()))

        return favoritesUseCase.remove(key)
    }

    const isFavorite = (k: number)=>{
        const [favorites] = useFavorite(state =>[state.favorites])
        const index = favorites.indexOf(k)
        return index !== -1;
    }

    return {
        addFavorite,
        removeFavorite,
        isFavorite
    }
}
