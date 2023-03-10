import { api } from "./api";

const { API_KEY } = process.env

export const FindWeatherAPI = {
    getForecast: (city: string) => {
        return api.get(`current.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
    }
}
