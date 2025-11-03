"use client";

import { MyOrdersTable } from "@/components/MyOrdersTable";

export default function OrdersPage() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
          HISTÓRICO DE PEDIDOS
        </h2>
        <MyOrdersTable />
      </div>
    </section>
  );
}
