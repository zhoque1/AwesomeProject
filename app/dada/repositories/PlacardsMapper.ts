import {PlacardsResponse} from "../../domain/entities/PlacardsResponse";
import Placards from "../../domain/models/Placards";
import Placard from "../../domain/models/Placard";

export const MapPlacardsDataToModel = (data: PlacardsResponse): Placards =>{
    const placardArray: Placard[] | undefined = data.data?.placards?.map(
        placardResponse => {
            return new Placard(
                placardResponse.id,
                placardResponse.author,
                placardResponse.width,
                placardResponse.height,
                placardResponse.url,
            );
        },
    );
    const placardsModels = placardArray ?? null

    return new Placards(placardsModels)
}
