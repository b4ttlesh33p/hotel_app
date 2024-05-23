import { FindHotelsParams } from "src/hotels/types";
import { HotelsProvider } from "./HotelsProvider";
import { formatISODateToDDMMYYYY } from "./utils";

export class MockHotelProvider implements HotelsProvider {

    url = 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator'
    constractor() {
        // this.url = 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator'
    }

    fetchData(params: FindHotelsParams) {
        const body = {query: {
            ski_site: Number(params.site),
            from_date: formatISODateToDDMMYYYY(params.from),
            to_date: formatISODateToDDMMYYYY(params.until),
            group_size: Number(params.size)
        }}
        console.log(`requesting ${this.url} with ${JSON.stringify(body)}`)
        return fetch(this.url, {method:'POST', body: JSON.stringify(body)})
    }
}