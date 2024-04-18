import * as React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import {useFavorite} from '../../hooks/useFavorite'
import FavoriteIcon from '../../assets/images/favorite.svg'
import FavoriteSelectedIcon from '../../assets/images/favorite_selected.svg'
import {IPlacardDetailViewModel} from "../viewmodels/placard-detail.viewmodel";

const Favorite = ({k}: {k: number}) => {
    // console.log("many times")

    const favorites = useFavorite((state: any) => state.favorites)
    const addFavorite = useFavorite((state: any) => state.addFavorite)
    const removeFavorite = useFavorite((state: any) => state.removeFavorite)
    const isFavorite = (favorites?.indexOf(k)?? 0) >= 0;

    // console.log("favorites list are = "+ JSON.stringify(favorites))
    const onPress = () => {
        if (isFavorite) {
            removeFavorite(k)
            // console.log("UnFavorite")

        } else {
            addFavorite(k)
            // console.log("Favorite")
        }
        // console.log("favorites list are = "+ JSON.stringify(favorites))
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
