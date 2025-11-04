"use client";
import Image from "../../public/images/productImg.svg";
import { MyOrder } from "@/components/MyOrder";
import { Badge } from "./ui/badge";
import { useOrders } from "@/hooks/useOrders";

interface MyOrdersTableProps {
  customerId?: string;
}

export function MyOrdersTable({ customerId }: MyOrdersTableProps) {
  const { data: orders, loading, error } = useOrders(customerId);

  if (!customerId) {
    return (
      <div>
        <p className="text-muted-foreground">
          Selecione um usuário para visualizar os pedidos.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4">Carregando pedidos...</div>;
  }

  if (error) {
    return <div className="p-4">Erro ao buscar pedidos: {error}</div>;
  }

  if (!orders || orders.length === 0) {
    return <div className="p-4">Nenhum pedido encontrado.</div>;
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id}>
          <div className="px-4 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-[#393330]">
              Pedido #{order.id.slice(-8)}
            </h3>
            <div className="flex flex-wrap items-center text-sm font-medium gap-2">
              <span className="text-xs text-[#393330]">Total:</span>
              <span className="text-sm text-muted-foreground">
                R$ {order.totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap items-center text-sm font-medium gap-2">
              <span className="text-xs text-[#393330]">Status:</span>
              <Badge
                variant={
                  order.status as
                    | "CONFIRMED"
                    | "CANCELLED"
                    | "PENDING_PAYMENT"
                    | "PAYMENT_FAILED"
                }
              >
                {order.status === "CONFIRMED"
                  ? "Confirmado"
                  : order.status === "CANCELLED"
                  ? "Cancelado"
                  : order.status === "PENDING_PAYMENT"
                  ? "Pendente"
                  : order.status === "PAYMENT_FAILED"
                  ? "Falhou"
                  : order.status}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col max-w-7xl mx-auto px-4 pb-4 border-b">
            <div className="flex flex-col gap-4">
              {order.items.map((item, index) => (
                <MyOrder
                  key={`${order.id}-${item.productId}-${index}`}
                  imageUrl={Image}
                  title={item.product.name}
                  description={`Produto ID: ${item.product.id}`}
                  price={item.product.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
