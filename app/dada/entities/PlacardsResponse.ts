import {PlacardResponse} from "./PlacardResponse";

export type PlacardsResponse = {
    data: {
        placards?: PlacardResponse[] | null
    }
}
