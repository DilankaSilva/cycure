import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

export const getPostBySlug = async (slug) => {
    try {
        const response = await api.get(`/api/posts?filters[slug][$eq]=${slug}&populate=*`);
        return response.data.data[0] || null;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(error.response?.data?.error?.message || "Failed to fetch post");
    }
};

export const getPosts = async () => {
    try {
        const response = await api.get("/api/posts?populate=*");
        return response.data.data || [];
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error(error.response?.data?.error?.message || "Failed to fetch posts");
    }
};

export const getLatestPost = async () => {
    try {
        const response = await api.get(
            "/api/posts?populate=*&sort=publishedAt:desc&pagination[limit]=1"
        );
        return response.data.data[0] || null; // Return first post or null
    } catch (error) {
        console.error("Error fetching latest post:", error);
        throw error;
    }
};