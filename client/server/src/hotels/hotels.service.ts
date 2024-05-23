import { providers } from "src/providers/providers"
import { FindHotelsParams } from "./types"
import { createRequestsForLargerRooms } from "src/providers/utils"

const findHotels = async (params: FindHotelsParams) => {
    const requests = providers.map((provider) => createRequestsForLargerRooms(params, provider))
    return requests
}

export const hotelsService = {
    findHotels
}