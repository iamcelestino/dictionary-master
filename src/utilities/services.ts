import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
  headers: { "X-Custom-Header": "word" },
});

export const fetchWord = async (query: string) => {
  try {
    const response = await instance.get(`/${query}`);

    return response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
