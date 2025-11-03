import { fetchApi } from "./api";

export interface Customer {
  id: string;
  name: string;
  email: string;
  document: string;
}

export const getCustomers = () => fetchApi<Customer[]>("/customers");
