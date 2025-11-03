"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartDetails } from "@/hooks/useCartDetails";
import { createOrder } from "@/services/orderService";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { rawItems, clearCart } = useCartDetails();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    cep: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const customerId = "38c70215-96f3-4bba-85cb-b051d2f98268";
      const orderData = {
        customerId,
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
    <Card className=" py-6 w-full max-w-lg bg-transparent shadow-none border-none">
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>
          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              placeholder="Rua, número, bairro"
              value={formData.address}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleInputChange}
                required
                disabled
              />
            </div>

            <div className="w-24">
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                placeholder="00000-000"
                value={formData.cep}
                onChange={handleInputChange}
                required
                disabled
              />
            </div>
          </div>

          <div>
            <Label htmlFor="card">Número do cartão</Label>
            <Input
              id="card"
              placeholder="0000 0000 0000 0000"
              value={formData.card}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="expiry">Validade</Label>
              <Input
                id="expiry"
                placeholder="MM/AA"
                value={formData.expiry}
                onChange={handleInputChange}
                required
                disabled
              />
            </div>
            <div className="w-20">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                disabled
              />
            </div>
          </div>

          <Button
            className="w-full mt-4"
            type="submit"
            disabled={loading || rawItems.length === 0}
          >
            {loading ? "Processando..." : "Finalizar Pedido"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
