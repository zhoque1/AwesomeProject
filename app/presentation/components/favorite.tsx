import * as React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import FavoriteIcon from '../../assets/images/favorite.svg'
import FavoriteSelectedIcon from '../../assets/images/favorite_selected.svg'
import {IFavoritesViewmodel} from "../viewmodels/favorites.viewmodel";
import {DiConstants, inject} from "../../di/di";
// import {useFavorite} from "../../hooks/useFavorite";

const favoritesViewModel = inject<IFavoritesViewmodel>(
    DiConstants.FAVORITE_VIEW_MODEL
)

const Favorite = ({k}: {k: number}) => {
    // console.log("many times")
    const isFavorite = favoritesViewModel.isFavorite(k)

    const onPress = () => {
        if (isFavorite) {
            favoritesViewModel.removeFavorite(k).then()
        } else {
            favoritesViewModel.addFavorite(k).then()
        }
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
