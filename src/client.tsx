import axios, { AxiosResponse } from 'axios';

export class FastAPIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async getColectionNameData(): Promise<any> {
    try {
      console.debug(`${this.baseURL}/get_collection_names`);
      const response: AxiosResponse<any> = await axios.get(`${this.baseURL}/get_collection_names`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

// // usage example
// const client = new FastAPIClient('https://example.com/api');
// client.getSampleData().then((data) => {
//   console.log(data);
// });