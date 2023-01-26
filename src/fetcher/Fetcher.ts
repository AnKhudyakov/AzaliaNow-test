import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const Fetcher = {
  GetProducts() {
    return instance.get(`products?limit=9`).then((response) => response.data);
  },
};