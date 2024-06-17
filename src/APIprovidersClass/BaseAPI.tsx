export class BaseAPI {
    private _id!: number;
    private _name!: string;
    private _key!: string;
    private _url!: string;

    // constructor(id: number, name: string, key: string, url: string) {
    //     this._id = id;
    //     this._name = name;
    //     this._key = key;
    //     this._url = url;
    // }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

}