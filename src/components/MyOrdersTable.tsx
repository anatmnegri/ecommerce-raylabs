"use client";
import Image from "../../public/images/productImg.svg";
import { MyOrder } from "@/components/MyOrder";
import { Badge } from "./ui/badge";

interface MyOrdersTableProps {
  id: number;
  status: string;
  total: number;
}

export function MyOrdersTable({ id, status, total }: MyOrdersTableProps) {
  return (
    <>
      <div className="px-4 pt-8 max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold text-[#393330]">Pedido #{id}</h3>
      </div>
      <div className="flex flex-row max-w-7xl mx-auto px-4 border-b items-center justify-between">
        <div>
          <MyOrder
            imageUrl={Image}
            title="Produto x"
            description="Descrição do produto x"
            price={29.99}
            quantity={1}
          />
        </div>

        <div className="flex flex-col items-center text-sm font-medium gap-2">
          <span className="text-xs text-[#393330]">Total:</span>
          <span className="text-sm text-muted-foreground">
            R$ {total.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col items-center text-sm font-medium gap-2">
          <span className="text-xs text-[#393330]">Status:</span>
          <Badge
            variant={status as "confirmed" | "cancelled" | "pending" | "failed"}
          >
            {status === "confirmed"
              ? "Confirmado"
              : status === "cancelled"
              ? "Cancelado"
              : status === "pending"
              ? "Pendente"
              : status === "failed"
              ? "Falhou"
              : status}
          </Badge>
        </div>
      </div>
    </>
  );
}
