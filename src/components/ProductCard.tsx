"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

export function ProductCard({
  id,
  image,
  name,
  description,
  price,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      description,
      price: parseFloat(price.replace("R$", "").replace(",", ".")),
      image,
    });
  };
  return (
    <Card className="w-64 rounded-2xl shadow-md flex flex-col justify-between">
      <CardContent className="flex flex-col items-center text-center gap-4">
        <div className="h-40 w-full relative">
          <Image src={image} alt={name} className="rounded-xl" />
        </div>
        <h3 className="font-semibold text-[#393330]">{name}</h3>
        <p className="text-sm text-[#393330] line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <span className="font-bold text-[#EE8542]">{price}</span>
        <Button size="icon" onClick={handleAddToCart}>
          <Plus className="h-4 w-4 text-white" />
        </Button>
      </CardFooter>
    </Card>
  );
}
