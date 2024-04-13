export default class Placard{

    constructor(
        private _id: number,
        private _author: string,
        private _width: number,
        private _height: number,
        private _url: string | null,
        private _download_url: string | null,
    ) {}

    get id(): number {
        return this._id;
    }

    get author(): string {
        return this._author;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get url(): string | null {
        return this._url;
    }

    get download_url(): string | null {
        return this._download_url;
    }
}
