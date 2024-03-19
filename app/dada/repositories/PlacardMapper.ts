import {PlacardResponse} from "../entities/PlacardResponse";
import Placard from "../../domain/models/Placard";

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
