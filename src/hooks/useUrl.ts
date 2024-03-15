import { BASE_URL_APP, BASE_URL_BECK_END } from "../configContantsApp";

const useUrl = () => {
    const getBaseUrl = (uri : string) : string => {
        return `${BASE_URL_APP}${uri}`;
    }

    const getBaseUrlBackEnd = (uri : string) : string => {
        return `${BASE_URL_BECK_END}${uri}`;
    }

    return {
        getBaseUrl,
        getBaseUrlBackEnd
    }


}

export { useUrl }