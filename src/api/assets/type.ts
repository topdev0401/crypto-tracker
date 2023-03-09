import { SearchParam } from "../../types/SearchParam"
import { AxiosResponse } from 'axios'

export interface ApiController {
    getAssets: ({ params }: {
        params: Partial<SearchParam>
    }) => Promise<AxiosResponse<Response>>
}