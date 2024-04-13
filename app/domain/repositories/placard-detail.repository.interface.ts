import Placard from "../models/placard";

export interface PlacardDetailRepositoryInterface {
    getPlacardDetail(id: number, signal?: AbortSignal): Promise<Placard | null>
}
