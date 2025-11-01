"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TotalPriceProps {
  price: number;
  quantity: number;
}

export function TotalPrice({ price, quantity }: TotalPriceProps) {
  return (
    <div className="h-40 flex items-center gap-4">
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="gap-2 flex flex-col">
          <h3 className="text-sm font-semibold">Total:</h3>
          <p className="text-base font-bold text-[#EE8542]">
            R${price.toFixed(2)}
          </p>
          <p className="text-xs text-muted-foreground">
            Quantidade de Itens: {quantity}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/products">
            <Button variant="outline" size="sm" className="rounded-full">
              Adicionar Mais Produtos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
