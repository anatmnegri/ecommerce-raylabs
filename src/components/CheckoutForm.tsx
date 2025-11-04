"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartDetails } from "@/hooks/useCartDetails";
import { createOrder } from "@/services/orderService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { TotalPrice } from "./TotalPrice";

export default function CheckoutForm() {
  const { getTotalPrice, getTotalItems } = useCartDetails();

  const { rawItems, clearCart } = useCartDetails();
  const { selectedUserId } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedUserId) {
      alert("Por favor, selecione um usuário antes de finalizar o pedido.");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        customerId: selectedUserId,
        items: rawItems,
      };

      const createdOrder = await createOrder(orderData);
      clearCart();

      router.push("/orders");
    } catch (error) {
      console.error("Erro:", error);

      let errorMessage = "Erro ao criar pedido. Tente novamente.";
      if (error instanceof Error) {
        errorMessage = `Erro: ${error.message}`;
      }

      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg bg-transparent shadow-none border-none">
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TotalPrice price={getTotalPrice()} quantity={getTotalItems()} />
          <Button
            className="w-full"
            type="submit"
            disabled={loading || rawItems.length === 0 || !selectedUserId}
          >
            {loading
              ? "Processando..."
              : !selectedUserId
              ? "Selecione um usuário"
              : "Finalizar Pedido"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
