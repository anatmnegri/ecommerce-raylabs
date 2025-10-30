import { Header } from "@/components/Header";
import { MyOrdersTable } from "@/components/MyOrdersTable";

export default function OrdersPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-8">
        <Header />
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
          HISTÓRICO DE PEDIDOS
        </h2>
        <MyOrdersTable id={1} status="cancelled" total={100} />
        <MyOrdersTable id={1} status="pending" total={100} />
        <MyOrdersTable id={1} status="failed" total={100} />
        <MyOrdersTable id={1} status="confirmed" total={100} />
      </div>
    </section>
  );
}
