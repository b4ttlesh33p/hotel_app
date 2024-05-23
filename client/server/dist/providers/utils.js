"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestsForLargerRooms = exports.formatISODateToDDMMYYYY = void 0;
const EXTRA_ROOM_SIZE = 2;
const formatISODateToDDMMYYYY = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};
exports.formatISODateToDDMMYYYY = formatISODateToDDMMYYYY;
const range = (n) => {
    return Array.from(Array(n).keys());
};
const createRequestsForLargerRooms = (params, provider) => {
    return range(EXTRA_ROOM_SIZE + 1).map((extra_room) => {
        return new provider().fetchData({ ...params, size: +params.size + extra_room });
    });
};
exports.createRequestsForLargerRooms = createRequestsForLargerRooms;
//# sourceMappingURL=utils.js.map