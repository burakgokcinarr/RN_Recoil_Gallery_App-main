import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.slingacademy.com/v1/sample-data',
    timeout: 15000
});