import { useApi } from '@/composables/useApi';

class ApiService {
    async get(endpoint: string, options = {}) {
        const api = useApi(); // ✅ Call inside method
        return await api.fetchApi(endpoint, { ...options, method: 'GET' });
    }

    async post(endpoint: string, body: any, options = {}) {
        const api = useApi();
        return await api.fetchApi(endpoint, { ...options, method: 'POST', body });
    }

    async put(endpoint: string, body: any, options = {}) {
        const api = useApi();
        return await api.fetchApi(endpoint, { ...options, method: 'PUT', body });
    }

    async delete(endpoint: string, options = {}) {
        const api = useApi();
        return await api.fetchApi(endpoint, { ...options, method: 'DELETE' });
    }
}

export const apiService = new ApiService();
