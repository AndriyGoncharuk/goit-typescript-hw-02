import axios from "axios";
import { Data } from "../types/data";

const API_KEY: string = "3fVnLBkIXp0wr0ZTW7ezZUVzqafSG0n0rginUM6XuFM";

axios.defaults.baseURL = "https://api.unsplash.com/";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
  client_id: API_KEY,
};

export const getData = async (query: string, page: number): Promise<Data> => {
  const { data } = await axios.get<Data>(
    `search/photos?query=${query}&page=${page}`
  );

  return data;
};
