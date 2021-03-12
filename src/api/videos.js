import { api } from "./index";

export const fetchVideos = async (title) => {
  return api.get(`/api/v1/books/videos/${title}`);
};
