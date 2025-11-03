"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";

interface CartItemCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
}

export function CartItemCard({
  imageUrl,
  title,
  description,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemCardProps) {
  const handleIncrement = () => {
    onQuantityChange?.(quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange?.(quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove?.();
  };

  return (
    <div className="h-40 flex items-center border-b gap-4">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={120}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col justify-between gap-2">
        <div className="gap-2 flex flex-col">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="text-base font-bold text-[#EE8542]">
            R${price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 border border-[#EE8542] rounded-full">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full border-tr"
              onClick={handleDecrement}
            >
              <Minus size={16} />
            </Button>
            <span className="text-sm font-medium text-[#EE8542]">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              onClick={handleIncrement}
            >
              <Plus size={16} />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="rounded-full" onClick={handleRemove}>
            <Trash size={16} className="mr-1" />
            REMOVER
          </Button>
        </div>
      </div>
    </div>
  );
}
