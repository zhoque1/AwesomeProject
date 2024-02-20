export default class Placard{
    private _id: number;
    private _author: string;
    private _width: number;
    private _height: number;
    private _url: string | null;

    constructor(
        id: number,
        author: string,
        width: number,
        height: number,
        url: string | null,
    ) {
        this._id = id;
        this._author = author;
        this._width = width;
        this._height = height;
        this._url = url;
    }

    public get id(): number{
        return this._id;
    }

    public get author(): string{
        return this._author;
    }

    public get width(): number{
        return this._width;
    }

    public get height(): number{
        return this._height;
    }

    public get url(): string | null{
        return this._url;
    }
}
