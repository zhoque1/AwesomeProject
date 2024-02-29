import {asFunction, createContainer, InjectionMode} from "awilix";
import Api from "../dada/dataSources/network/api";
import {PlacardsRepository} from "../dada/repositories/PlacardsRepository";

import {PlacardsViewModel} from "../presentation/viewmodels/PlacardsViewModel";
import {GetPlacardsUseCase} from "../dada/usecases/GetPlacardsUseCase";

const DiConstants = {
    API: 'api',
    PLACARDS_REPO: 'placardsRepository',
    GET_PLACARDS_USE_CASE: 'getPlacardsUseCase',
    PLACARDS_VIEW_MODEL: 'placardsViewModel'
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
})

const inject = <T>(name: string): T =>{
    return injectionContainer.resolve<T>(name)
}

export { DiConstants, inject, injectionContainer}
