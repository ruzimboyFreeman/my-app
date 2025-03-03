// @ts-ignore

import { useRuntimeConfig } from '#app';

export const  useApi = ()=> {
    const runtimeConfig = useRuntimeConfig();

    // @ts-ignore
    const fetchApi = async (endpoint, options = {}) => {
        const baseUrl = runtimeConfig.public.apiBase; // Get the base URL from runtime config
        const url = `${baseUrl}${endpoint}`;
        try {
            const response = await $fetch(url, options);
            return response;
        } catch (error) {
            console.error('API Error:', error);
            throw error; // Re-throw the error for handling in components
        }
    };

    return {fetchApi};
}
