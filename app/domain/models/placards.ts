import Placard from "./placard";

export default class Placards{
    private _placards: Placard[] | null;

    constructor(placards: Placard[] | null) {
        this._placards = placards;
    }

    public get placards(): Placard[] | null {
        return this._placards
    }

    public set placards(placards: Placard[] | null){
        this._placards = placards
    }
}
