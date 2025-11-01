import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Categorias } from "./Categorias";
import ProductsList from "./ProductsList";

export const Destaques = () => {
  return (
    <section
      className="max-w-7xl mx-auto flex flex-col items-center gap-10"
      id="destaques"
    >
      <div className="flex items-center gap-4 font-poppins">
        <Categorias title="Mais Pedidos" />
        <Categorias title="Novos Produtos" />
        <Categorias title="Best Sellers" />
      </div>
      <ProductsList />
      <Link href="/products">
        <Button className="bg-[#EE8542] hover:bg-[#ca682c] rounded-full px-6 py-3">
          <p>Ver Tudo</p>
        </Button>
      </Link>
    </section>
  );
};
