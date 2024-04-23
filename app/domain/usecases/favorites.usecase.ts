import {FavoritesRepositoryInterface} from "../repositories/favorites.repository.interface";

export interface IRepositoryProps{
    favoritesRepository: FavoritesRepositoryInterface
}

export interface IFavoritesUsecase{
    add(key: number): Promise<void | null>
    remove(key: number): Promise<void | null>
}

export const FavoritesUsecase = (
    {
        favoritesRepository
    }: IRepositoryProps
): IFavoritesUsecase =>{
    return {
        add: async (key: number): Promise<void | null> => {
            return await favoritesRepository.add(key);
        },
        remove: async (key: number): Promise<void | null> => {
            return await favoritesRepository.remove(key);
        }
    }
}
