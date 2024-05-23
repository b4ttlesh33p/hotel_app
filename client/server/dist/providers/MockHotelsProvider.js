"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockHotelProvider = void 0;
const utils_1 = require("./utils");
class MockHotelProvider {
    constructor() {
        this.url = 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator';
    }
    constractor() {
    }
    fetchData(params) {
        const body = { query: {
                ski_site: Number(params.site),
                from_date: (0, utils_1.formatISODateToDDMMYYYY)(params.from),
                to_date: (0, utils_1.formatISODateToDDMMYYYY)(params.until),
                group_size: Number(params.size)
            } };
        console.log(`requesting ${this.url} with ${JSON.stringify(body)}`);
        return fetch(this.url, { method: 'POST', body: JSON.stringify(body) });
    }
}
exports.MockHotelProvider = MockHotelProvider;
//# sourceMappingURL=MockHotelsProvider.js.map