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
  public async getDocumentsPaged(
    collections: string,
    pageSize: number,
    pageNumber: number,
    startTime: string | null = "",
    endTime: string | null = "",
    longStart: number | null = 0,
    longEnd: number | null = 0,
    latStart: number | null = 0,
    latEnd: number | null = 0,
    country: string | null = "",
    type: string | null = "",
    attribute1Start: number | null = 0,
    attribute1End: number | null = 0,
    attribute2Start: number | null = 0,
    attribute2End: number | null = 0,
    includeEdges: boolean | null = false,
    edgeCollection: string | null = "",
    excludeEdges: boolean | null = false,
    collectionFilter: string | null = ""
  ): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseURL}/get_documents_paged`, {
        params: {
          collections,
          pageSize,
          pageNumber,
          startTime,
          endTime,
          longStart,
          longEnd,
          latStart,
          latEnd,
          country,
          type,
          attribute1Start,
          attribute1End,
          attribute2Start,
          attribute2End,
          includeEdges,
          edgeCollection,
          excludeEdges,
          collectionFilter
        },
        headers: {
          Accept: 'application/json', // Specify JSON response
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching paged documents:', error);
      throw error;
    }
  }
}


// // usage example
// const client = new FastAPIClient('https://example.com/api');
// client.getSampleData().then((data) => {
//   console.log(data);
// });