"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutForm() {
  return (
    <Card className="mx-auto p-6 w-full max-w-lg bg-transparent shadow-none border-none">
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" placeholder="Digite seu nome" />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seuemail@email.com" />
          </div>
          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" type="text" placeholder="000.000.000-00" />
          </div>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" placeholder="Rua, número, bairro" />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" placeholder="Cidade" />
            </div>

            <div className="w-24">
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" placeholder="00000-000" />
            </div>
          </div>

          <div>
            <Label htmlFor="card">Número do cartão</Label>
            <Input id="card" placeholder="0000 0000 0000 0000" />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="expiry">Validade</Label>
              <Input id="expiry" placeholder="MM/AA" />
            </div>
            <div className="w-20">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
          </div>

          <Button className="w-full mt-4" type="submit">
            Finalizar Pedido
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
