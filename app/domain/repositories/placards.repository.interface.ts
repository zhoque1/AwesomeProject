import {PlacardsRequestModel} from "../requests/placards-request.model";
import Placards from "../models/placards";

export interface PlacardsRepositoryInterface {
    getPlacards(request: PlacardsRequestModel, signal?: AbortSignal): Promise<Placards | null>;
}
