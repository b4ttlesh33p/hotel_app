import { FindHotelsParams } from "src/hotels/types";
export interface HotelsProvider {
    url: string;
    fetchData: (params: FindHotelsParams) => Promise<any>;
}
