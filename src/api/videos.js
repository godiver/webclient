import { api } from "./index";

export const fetchVideosIndex = async () => {
  return api.get(`/api/v1/books`);
};

export const fetchVideos = async (title) => {
  return api.get(`/api/v1/books/videos/${title}`);
};

export const fetchVideo = async (videoId) => {
  return api.get(`/api/v1/watch/${videoId}`);
};
