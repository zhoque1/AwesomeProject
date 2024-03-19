import {asFunction, createContainer, InjectionMode} from "awilix";
import Api from "../dada/dataSources/network/api";
import {PlacardsRepository} from "../dada/repositories/PlacardsRepository";

import {PlacardsViewModel} from "../presentation/viewmodels/PlacardsViewModel";
import {GetPlacardsUseCase} from "../dada/usecases/GetPlacardsUseCase";
import {PlacardDetailRepository} from "../dada/repositories/PlacardDetailRepository";
import {GetPlacardDetailUseCase} from "../dada/usecases/GetPlacardDetailUseCase";
import {PlacardDetailViewModel} from "../presentation/viewmodels/PlacardDetailViewModel";

const DiConstants = {
    API: 'api',
    PLACARDS_REPO: 'placardsRepository',
    GET_PLACARDS_USE_CASE: 'getPlacardsUseCase',
    PLACARDS_VIEW_MODEL: 'placardsViewModel',
    PLACARD_DETAIL_REPO: 'placardDetailRepository',
    GET_PLACARD_DETAIL_USE_CASE: 'getPlacardDetailUseCase',
    PLACARD_DETAIL_VIEW_MODEL: 'placardDetailViewModel',
}

const injectionContainer = createContainer({injectionMode: InjectionMode.PROXY})

injectionContainer.register({
    [DiConstants.API]: asFunction(Api).singleton(),
    // [DiConstants.PLACARDS_REPO]: asFunction(
    //     ({[DiConstants.API]: api}) =>
    //     PlacardsRepository(api)
    // ).singleton(),
    [DiConstants.PLACARDS_REPO]: asFunction(PlacardsRepository).singleton(),
    // [DiConstants.GET_PLACARDS_USE_CASE]: asFunction(
    //     ({[DiConstants.PLACARDS_REPO]: placardsRepo}) =>
    //     GetPlacardsUseCase(placardsRepo)
    // ).singleton(),
    [DiConstants.GET_PLACARDS_USE_CASE]: asFunction(GetPlacardsUseCase).singleton(),
    // [DiConstants.PLACARDS_VIEW_MODEL]: asFunction(
    //     ({ [DiConstants.GET_PLACARDS_USE_CASE]: getPlacardsUseCase }) =>
    //         PlacardsViewModel(getPlacardsUseCase)
    // ).singleton()
    [DiConstants.PLACARDS_VIEW_MODEL]: asFunction(PlacardsViewModel).singleton(),

    [DiConstants.PLACARD_DETAIL_REPO]: asFunction(PlacardDetailRepository).singleton(),
    [DiConstants.GET_PLACARD_DETAIL_USE_CASE]: asFunction(GetPlacardDetailUseCase).singleton(),
    [DiConstants.PLACARD_DETAIL_VIEW_MODEL]: asFunction(PlacardDetailViewModel).singleton(),
})

const inject = <T>(name: string): T =>{
    return injectionContainer.resolve<T>(name)
}

export { DiConstants, inject, injectionContainer}
