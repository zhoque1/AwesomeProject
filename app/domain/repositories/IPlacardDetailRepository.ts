import Placard from "../models/Placard";

export interface IPlacardDetailRepository{
    getPlacardDetail(id: number, signal?: AbortSignal): Promise<Placard | null>
}
