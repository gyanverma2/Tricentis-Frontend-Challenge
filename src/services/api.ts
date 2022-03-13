import axios from "axios"

export class APIService {
    static apiCustomHeader(headers: any) {
        return axios.create({
            baseURL: process.env.API_BASE_URL,
            headers: headers,
        })
    }
    static api() {
        return axios.create({
            baseURL: process.env.API_BASE_URL,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
    }
}