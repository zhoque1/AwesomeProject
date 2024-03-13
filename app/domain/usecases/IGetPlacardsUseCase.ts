import Placards from "../models/Placards";
import {PlacardsRequest} from "../requests/PlacardsRequest";
import {IPlacardsRepository} from "../repositories/IPlacardsRepository";

export interface IGetPlacardsUseCase{
    execute(
        request: PlacardsRequest,
        // repository: IPlacardsRepository,
    ): Promise<Placards | null>
}


