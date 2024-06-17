export class API_OutboundService {

// Make the asynchronous GET request and return a Promise
static async sendGetRequest(url: string) {
    try {

        const response = await fetch(url);
    
        if (!response.ok) {
            const errorMessage = `HTTP error! status: ${response.status}`;
            // console.error(errorMessage);
            throw new Error(errorMessage);
        }
    
        const data = await response.json();
        console.log('Request retrieved successfully:', data);
        return data;

        } catch (error) {
            // console.error('Error occurred:', error);
        throw error;
    }
}

}