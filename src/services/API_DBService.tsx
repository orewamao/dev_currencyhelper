import { getLocalDB } from "./internal-services/db";

export class API_DBService {
    // 新增一条API记录
    static async addAPIData(data: any) {
        getLocalDB.apiData.add(data);
    }

    // 修改一条API记录
    static async updateAPIData(id: string, data: any) {
        getLocalDB.apiData.where(":id").equals(id).modify(data);
    }

    // 查询指定API的配置
    static async retrieveAPIDataByID(id: string) {
        return new Promise((resolve, reject) => {
            getLocalDB.apiData.get(id)
                .then(record => {
                    if (record) {
                        resolve(record);
                    } else {
                        const error = new Error(`Unable to find the record whose ID is ${id}.`);
                        reject(error);
                    }
                })
                .catch(err => {
                    reject('Failed when running retrieveAPIDataByID, error message is: ' + err);
                });
        });
    }

    // 查询所有记录
    static async getAll() {
        return new Promise((resolve, reject) => {
            getLocalDB.apiData.toArray()
                .then(allRecords => {
                    resolve(allRecords);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        });
    }
}