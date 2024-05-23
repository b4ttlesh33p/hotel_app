import { FindHotelsParams } from "src/hotels/types";
const EXTRA_ROOM_SIZE = 2

export const formatISODateToDDMMYYYY = (isoString: string) => {
    const date = new Date(isoString);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }

const range = (n) => {
    return Array.from(Array(n).keys())
}

export const createRequestsForLargerRooms = (params: FindHotelsParams, provider) => {
    return range(EXTRA_ROOM_SIZE + 1).map(( extra_room ) => {

        return new provider().fetchData({ ...params, size: +params.size + extra_room})
    })
}