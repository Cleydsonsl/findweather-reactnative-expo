import { api } from "./api";

const { API_KEY } = process.env

export const FindWeatherAPI = {
    getForecast: (city: string) => {
        return api.get(`current.json?key=8a9d04178239468bae832503230703&q=${city}&days=7&aqi=no&alerts=no`)
    }
}
