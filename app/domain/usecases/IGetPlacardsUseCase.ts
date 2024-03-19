import Placards from "../models/Placards";
import {PlacardsRequest} from "../requests/PlacardsRequest";

export interface IGetPlacardsUseCase{
    execute(
        request: PlacardsRequest,
    ): Promise<Placards | null>
}


