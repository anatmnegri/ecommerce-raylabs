"use client";
import Image from "../../public/images/productImg.svg";
import { MyOrder } from "@/components/MyOrder";
import { Badge } from "./ui/badge";

interface MyOrdersTableProps {
  id: number;
  status: string;
  total: number;
  itens: {
    produtoId: number;
    quantidade: number;
    nome?: string;
    descricao?: string;
    imagem?: string;
    preco?: number;
  }[];
}

export function MyOrdersTable({
  id,
  status,
  total,
  itens,
}: MyOrdersTableProps) {
  return (
    <>
      <div className="px-4 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row sm:tems-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-[#393330]">Pedido #{id}</h3>
        <div className="flex flex-wrap items-center text-sm font-medium gap-2">
          <span className="text-xs text-[#393330]">Total:</span>
          <span className="text-sm text-muted-foreground">
            R$ {total.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-wrap items-center text-sm font-medium gap-2">
          <span className="text-xs text-[#393330]">Status:</span>
          <Badge
            variant={
              status as
                | "CONFIRMED"
                | "CANCELLED"
                | "PENDING_PAYMENT"
                | "PAYMENT_FAILED"
            }
          >
            {status === "CONFIRMED"
              ? "Confirmado"
              : status === "CANCELLED"
              ? "Cancelado"
              : status === "PENDING_PAYMENT"
              ? "Pendente"
              : status === "PAYMENT_FAILED"
              ? "Falhou"
              : status}
          </Badge>
        </div>
      </div>
      <div className="flex flex-row max-w-7xl mx-auto px-4 border-b items-center justify-between">
        <div className="flex flex-col gap-4">
          {itens.map((item, index) => (
            <MyOrder
              key={index}
              imageUrl={item.imagem || Image}
              title={item.nome || `Produto ${item.produtoId}`}
              description={item.descricao || "Descrição não disponível"}
              price={item.preco || 0}
              quantity={item.quantidade}
            />
          ))}
        </div>
      </div>
    </>
  );
}
