import { fetchApi } from "./api";

export interface OrderItem {
  productId: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
  };
}

export interface Order {
  id: string;
  customerId: string;
  totalPrice: number;
  status: "PENDING_PAYMENT" | "CONFIRMED" | "CANCELLED" | "PAYMENT_FAILED";
  createdAt: string;
  items: OrderItem[];
  customer?: {
    id: string;
    name: string;
    email: string;
  };
}

export const getOrders = () =>
  fetchApi<Order[]>("/orders/customer/38c70215-96f3-4bba-85cb-b051d2f98268");

export const createOrder = (orderData: {
  customerId: string;
  items: { productId: string; quantity: number }[];
}) =>
  fetchApi<Order>("/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
