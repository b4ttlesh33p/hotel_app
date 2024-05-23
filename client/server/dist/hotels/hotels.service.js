"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelsService = void 0;
const providers_1 = require("../providers/providers");
const utils_1 = require("../providers/utils");
const findHotels = async (params) => {
    const requests = providers_1.providers.map((provider) => (0, utils_1.createRequestsForLargerRooms)(params, provider));
    return requests;
};
exports.hotelsService = {
    findHotels
};
//# sourceMappingURL=hotels.service.js.map