import Dexie, { Table } from 'dexie'

export interface APIData {
    id?: string;
    name?: string;
    url?: string;
    key?: string;
}

export class localDB extends Dexie {
    apiData!: Table<APIData>;

    constructor() {
        super('currencyHelper');
        this.version(1).stores({
            apiData: '++id, name, url, key'
        })
    }
}

export const getLocalDB = new localDB();