// services/articleService.ts
import { API_PATHS } from '@/utils/apiPaths';
import { apiService } from '@/utils/apiService';
// @ts-ignore

export const articleService = {
    async listArticles() {
        return await apiService.get(API_PATHS.articles.list);
    },

    async getArticle(slug: string) {
        return await apiService.get(API_PATHS.articles.detail(slug));
    },

    async createArticle(articleData: any) {
        return await apiService.post(API_PATHS.articles.create, articleData);
    },

    // async updateArticle(slug: string, articleData: any) {
    //     return await apiService.put(API_PATHS.articles.update(slug), articleData);
    // },
    //
    // async deleteArticle(slug: string) {
    //     return await apiService.delete(API_PATHS.articles.delete(slug));
    // },
};
