import { create } from 'zustand'

type State = {
    favorites: number[]
}

type Actions = {
    addFavorite: (key: number) => void
    removeFavorite: (key: number) => void
}

export const useFavorite = create<State & Actions>((set, get) =>({
    favorites: [],
    addFavorite: (key: number) => {
        const temp = get().favorites.slice()
        temp.push(key)
        set({ favorites: temp })
    },
    removeFavorite: (key: number) => {
        const temp = get().favorites.slice()
        const index = temp.indexOf(key)
        if(index !== -1){
            temp.splice(index, 1)
        }
        set({ favorites: temp })
    },
}))
