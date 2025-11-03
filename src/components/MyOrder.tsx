"use client";

import Image from "next/image";

interface HistoricCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export function MyOrder({
  imageUrl,
  title,
  description,
  price,
  quantity,
}: HistoricCardProps) {
  return (
    <div className="h-40 flex items-center gap-4">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={120}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="gap-2 flex flex-col">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="text-base font-bold text-[#ee8542]">
            R${price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Quantidade: {quantity}</span>
        </div>
      </div>
    </div>
  );
}
