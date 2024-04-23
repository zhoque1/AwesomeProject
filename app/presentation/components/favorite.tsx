import * as React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import {useFavorite} from '../../hooks/useFavorite'
import FavoriteIcon from '../../assets/images/favorite.svg'
import FavoriteSelectedIcon from '../../assets/images/favorite_selected.svg'
import {IFavoritesViewmodel} from "../viewmodels/favorites.viewmodel";
import {DiConstants, inject} from "../../di/di";
import {useState} from "react";
import {useFavorite2} from "../../hooks/useFavorite2";

const favoritesViewModel = inject<IFavoritesViewmodel>(
    DiConstants.FAVORITE_VIEW_MODEL
)

const Favorite = ({k}: {k: number}) => {
    // console.log("many times")
    const favoritesStore = useFavorite2((state) => state.favorites2)
    const isFavorite = (favoritesStore?.indexOf(k)?? 0) >= 0;
    // const isFavorite1 = favoritesViewModel.getFavorites(k)


    // const favorites = useFavorite((state: any) => state.favorites)
    // const addFavorite = useFavorite((state: any) => state.addFavorite)
    // const removeFavorite = useFavorite((state: any) => state.removeFavorite)
    // const isFavorite = (favorites?.indexOf(k)?? 0) >= 0;
    // const isFavorite1 = (favorites?.indexOf(k)?? 0) >= 0;
    // const [isFavorite, setIsFavorite] = useState(isFavorite1)

    // console.log("favorites list are = "+ JSON.stringify(favorites))
    const onPress = () => {
        if (isFavorite) {
            // removeFavorite(k)
            favoritesViewModel.removeFavorite(k).then()
            // console.log("UnFavorite")

        } else {
            // addFavorite(k)
            favoritesViewModel.addFavorite(k).then()
            // console.log("Favorite")
        }
        // setIsFavorite(!isFavorite)
    }

    return (
        <TouchableOpacity onPress={onPress}>
            {(isFavorite && <FavoriteSelectedIcon width={32} height={32} />) || (
                <FavoriteIcon width={32} height={32} />
            )}
        </TouchableOpacity>

    );
};

export default Favorite;
