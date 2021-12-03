import { api } from "./index";

const apiURL = process.env.REACT_APP_BACKEND_API_BASE_URL

export const fetchVideosIndex = async () => {
  return api.get(`${apiURL}/api/v1/books`);
};

export const fetchVideos = async (title) => {
  return api.get(`${apiURL}/api/v1/books/videos/${title}`);
};

export const fetchVideo = async (videoId) => {
  return api.get(`${apiURL}/api/v1/watch/${videoId}`);
};

export const fetchSearchBooks = async (title) => {
  return api.get(`${apiURL}/api/v1/books/search/${title}`)
};
