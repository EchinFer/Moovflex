import axios from "axios";

console.log(import.meta.env);
export const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    params: {
        apikey: import.meta.env.VITE_API_KEY,
    },
});