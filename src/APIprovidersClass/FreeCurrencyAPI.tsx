import { BaseAPI } from './BaseAPI'
import { API_DBService } from '../services/API_DBService';
import { API_OutboundService } from '../services/API_OutboundService';

class FreeCurrencyAPI extends BaseAPI {

    providerId = '001';
    providerName = 'FreeCurrencyAPI';
    // providerURL = 'https://api.freecurrencyapi.com/v1/latest';

    constructor() {
        super();
    }

    private static instance: FreeCurrencyAPI;

    // singleton model
    public static getInstance(): FreeCurrencyAPI {
        if (!FreeCurrencyAPI.instance) {
          FreeCurrencyAPI.instance = new FreeCurrencyAPI();
        }
        return FreeCurrencyAPI.instance;
      }

    async saveAPIData(data: any) {
        const newData = { ...data, id: this.providerId};
        API_DBService.addAPIData(newData);
    }

    async updateAPIData(data: any) {
        // data example: { url: http://website.com, key: abcde}
        const hasRecord = await this.retrieveAPIData()
        if (hasRecord) {
          API_DBService.updateAPIData(this.providerId, data);
        }
        else {
          this.saveAPIData(data);
        }
    }

    async retrieveAPIData() {
        try {
            const apiData: any = await API_DBService.retrieveAPIDataByID(this.providerId);
            if (apiData) {
              return apiData;
            } else {
              console.log('No API data found in local database.');
            }
          } catch (error) {
            console.error('Error retrieving API data:', error);
          }
    }

    async getAll() {
        try {
            const apiData: any = await API_DBService.getAll();
            if (apiData) {
              return apiData;
            } else {
              console.log('getAll, No API data found in local database.');
            }
          } catch (error) {
            console.error('getAll, Error retrieving API data:', error);
          }
    }

    async getCurrencyData(baseCurrency: string, currencies: string) {

        const api_data:any = await API_DBService.retrieveAPIDataByID(this.providerId);
 
        // Check if required parameters are provided
        if (!api_data.key) {
            return Promise.reject(new Error('Error: API key is missing'));
        }
        if (!currencies) {
            return Promise.reject(new Error('Error: Currencies parameter is missing'));
        }
        if (!baseCurrency) {
            return Promise.reject(new Error('Error: Base currency parameter is missing'));
        }

        // Construct the API request URL of FreeCurrencyAPI
        const url = `${api_data.url}?apikey=${api_data.key}&currencies=${currencies}&base_currency=${baseCurrency}`;

        return API_OutboundService.sendGetRequest(url)
            .then(data => {
                console.log("Call getCurrencyData successfully.");
                return data;
            })
            .catch(error => {
                console.log("Failed to Call getCurrencyData.");
                throw error;
            })
    }
}

export { FreeCurrencyAPI }