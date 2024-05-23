import { FindHotelsParams } from "src/hotels/types";
import { HotelsProvider } from "./HotelsProvider";
export declare class MockHotelProvider implements HotelsProvider {
    url: string;
    constractor(): void;
    fetchData(params: FindHotelsParams): Promise<Response>;
}
