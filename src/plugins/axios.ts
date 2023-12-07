import axios from "axios"
export default defineNuxtPlugin(()=>{
    const NUXT_BASE_API = process.env.NUXT_BASE_URL
    const axiosIntance = axios.create({
        baseURL:NUXT_BASE_API,
    })
    return{
        provide:{
            axiosIntance
        }
    }
})