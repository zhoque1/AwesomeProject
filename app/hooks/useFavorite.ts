import { create } from 'zustand'

export interface IFavorites{
    favorites2: number[]
}

export const useFavorite = create<IFavorites>((set, get) =>({
    favorites2: [],
}))

