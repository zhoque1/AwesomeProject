import {asFunction, createContainer, InjectionMode} from "awilix";
import Api from "../dataSources/network/api";
import {PlacardsRepository} from "../repositories/PlacardsRepository";
import {GetPlacardsUseCase} from "../../domain/useCases/GetPlacardsUseCase";
import {PlacardsViewModel} from "../../presentation/viewmodels/PlacardsViewModel";

const DiConstants = {
    API: 'api',
    PLACARDS_REPO: 'placardsRepository',
    GET_PLACARDS_USE_CASE: 'getPlacardsUseCase',
    PLACARDS_VIEW_MODEL: 'placardsViewModel'
}

const injectionContainer = createContainer({injectionMode: InjectionMode.PROXY})

injectionContainer.register({
    [DiConstants.API]: asFunction(Api).singleton(),
    [DiConstants.PLACARDS_REPO]: asFunction(PlacardsRepository).singleton(),
    [DiConstants.GET_PLACARDS_USE_CASE]: asFunction(GetPlacardsUseCase),
    [DiConstants.PLACARDS_VIEW_MODEL]: asFunction(
        ({ [DiConstants.GET_PLACARDS_USE_CASE]: getPlacardsUseCase }) =>
            PlacardsViewModel(getPlacardsUseCase)
    ).singleton()
})

const inject = <T>(name: string): T =>{
    return injectionContainer.resolve<T>(name)
}

export { DiConstants, inject, injectionContainer}
