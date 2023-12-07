export const useEnv =()=>{
    const config = useRuntimeConfig()
    return {
        baseUrl: `${config.public.NUXT_BASE_API}`
    }
}