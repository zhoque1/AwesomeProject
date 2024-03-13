import {PlacardsRequest} from "../requests/PlacardsRequest";
import Placards from "../models/Placards";

export interface IPlacardsRepository{
    getPlacards(request: PlacardsRequest, signal?: AbortSignal): Promise<Placards | null>;
}
