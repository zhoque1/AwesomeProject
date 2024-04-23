import {asFunction, createContainer, InjectionMode} from "awilix";
import Api from "../data/dataSources/network/api";
import {PlacardsRepository} from "../data/repositories/placards.repository";

import {PlacardsViewmodel} from "../presentation/viewmodels/placards.viewmodel";
import {GetPlacardsUsecase} from "../domain/usecases/get-placards.usecase";
import {PlacardDetailRepository} from "../data/repositories/placard-detail.repository";
import {GetPlacardDetailUsecase} from "../domain/usecases/get-placard-detail.usecase";
import {PlacardDetailViewmodel} from "../presentation/viewmodels/placard-detail.viewmodel";
import {FavoritesRepository} from "../data/repositories/favorites.repository";
import {FavoritesUsecase} from "../domain/usecases/favorites.usecase";
import {FavoritesViewmodel} from "../presentation/viewmodels/favorites.viewmodel";

const DiConstants = {
    API: 'api',
    PLACARDS_REPO: 'placardsRepository',
    GET_PLACARDS_USE_CASE: 'getPlacardsUseCase',
    PLACARDS_VIEW_MODEL: 'placardsViewModel',
    PLACARD_DETAIL_REPO: 'placardDetailRepository',
    GET_PLACARD_DETAIL_USE_CASE: 'getPlacardDetailUseCase',
    PLACARD_DETAIL_VIEW_MODEL: 'placardDetailViewModel',


    FAVORITES_REPOSITORY: 'favoritesRepository',
    FAVORITES_USE_CASE: 'favoritesUseCase',
    FAVORITE_VIEW_MODEL: 'favoritesViewModel',
}

const injectionContainer = createContainer({injectionMode: InjectionMode.PROXY})

injectionContainer.register({
    [DiConstants.API]: asFunction(Api).singleton(),
    [DiConstants.PLACARDS_REPO]: asFunction(PlacardsRepository).singleton(),
    [DiConstants.GET_PLACARDS_USE_CASE]: asFunction(GetPlacardsUsecase).singleton(),
    [DiConstants.PLACARDS_VIEW_MODEL]: asFunction(PlacardsViewmodel).singleton(),
    [DiConstants.PLACARD_DETAIL_REPO]: asFunction(PlacardDetailRepository).singleton(),
    [DiConstants.GET_PLACARD_DETAIL_USE_CASE]: asFunction(GetPlacardDetailUsecase).singleton(),
    [DiConstants.PLACARD_DETAIL_VIEW_MODEL]: asFunction(PlacardDetailViewmodel).singleton(),

    [DiConstants.FAVORITES_REPOSITORY]: asFunction(FavoritesRepository).singleton(),
    [DiConstants.FAVORITES_USE_CASE]: asFunction(FavoritesUsecase).singleton(),
    [DiConstants.FAVORITE_VIEW_MODEL]: asFunction(FavoritesViewmodel).singleton(),

})

const inject = <T>(name: string): T =>{
    return injectionContainer.resolve<T>(name)
}

export { DiConstants, inject, injectionContainer}
