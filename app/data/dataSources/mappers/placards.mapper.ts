import {PlacardsResponse} from "../../entities/placards.response";
import Placards from "../../../domain/models/placards";
import Placard from "../../../domain/models/placard";

export const MapPlacardsDataToModel = (response: PlacardsResponse): Placards =>{
    const placardArray: Placard[] | undefined = response.data?.map(
        placardResponse => {
            return new Placard(
                placardResponse.id,
                placardResponse.author,
                placardResponse.width,
                placardResponse.height,
                placardResponse.url,
                placardResponse.download_url,
            );
        },
    );
    const placards = placardArray ?? null
    // console.log("placards = "+ JSON.stringify(placards))
    return new Placards(placards)
}
