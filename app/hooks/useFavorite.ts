import { create } from 'zustand'

export interface IFavorites{
    favorites: number[],
    isFavorite: (key: number) => boolean
}

export const useFavorite = create<IFavorites>((set, get) =>({
    favorites: [],
    isFavorite: (key: number) => {
        const temp = get().favorites.slice()
        const index = temp.indexOf(key)
        return index !== -1;
    },
}))




