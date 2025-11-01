"use client";

import { useEffect, useState } from "react";
import { MyOrdersTable } from "@/components/MyOrdersTable";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pedidos")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Erro ao buscar pedidos:", err));
  }, []);

  return (
    <section className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
          HISTÓRICO DE PEDIDOS
        </h2>
        {orders.map((order: any) => (
          <MyOrdersTable
            key={order.id}
            id={order.id}
            status={order.status}
            total={order.total}
            itens={order.itens}
          />
        ))}
      </div>
    </section>
  );
}
