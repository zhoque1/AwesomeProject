import Placard from "../models/Placard";

export interface IGetPlacardDetailUseCase{
    execute(
        id: number
    ): Promise<Placard | null>
}
