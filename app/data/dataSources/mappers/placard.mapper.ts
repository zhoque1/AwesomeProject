import {PlacardResponse} from "../../entities/placard.response";
import Placard from "../../../domain/models/placard";

export const MapPlacardDetailToModel =(response: PlacardResponse): Placard =>{
    return new Placard(
        response.id,
        response.author,
        response.width,
        response.height,
        response.url,
        response.download_url
    )
}
