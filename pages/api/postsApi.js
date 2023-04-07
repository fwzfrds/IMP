import axios from "axios";

const postsApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => {
    const response = await postsApi.get("/posts")
    return response.data
}

export const getPostDetails = async (id) => {
    const response = await postsApi.get(`/posts/${id}`)
    return response.data
}

export const addPost = async (post) => {
    return await postsApi.post("/posts", post)
}

export const updatePost = async (post) => {
    return await postsApi.patch(`/posts/${post.id}`, post)
}

export const deletePost = async (id) => {
    return await postsApi.delete(`/posts/${id}`)
}

export default postsApi