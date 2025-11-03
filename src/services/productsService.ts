import { fetchApi } from "./api";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stockQty: number;
}

export const getProducts = () => fetchApi<Product[]>("/products");
