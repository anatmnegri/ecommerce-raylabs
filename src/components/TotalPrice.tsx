"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TotalPriceProps {
  price: number;
  quantity: number;
}

export function TotalPrice({ price, quantity }: TotalPriceProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="gap-4 flex flex-col">
        <h3 className="text-sm font-semibold">Total:</h3>
        <p className="text-base font-bold text-[#EE8542]">
          R${price.toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground">
          Quantidade de Itens: {quantity}
        </p>
      </div>
      <div className="w-full">
        <Link href="/products">
          <Button variant="outline" size="sm" className="w-full rounded-full">
            Adicionar Mais Produtos
          </Button>
        </Link>
      </div>
    </div>
  );
}
