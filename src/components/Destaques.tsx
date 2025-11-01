import { ProductCard } from "../components/ProductCard";
import productImg from "../..//public/images/productImg.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Categorias } from "./Categorias";

export const Destaques = () => {
  return (
    <section
      className="max-w-7xl mx-auto flex flex-col items-center gap-10 pb-20"
      id="destaques"
    >
      <div className="flex items-center gap-4 font-poppins">
        <Categorias title="Mais Pedidos" />
        <Categorias title="Novos Produtos" />
        <Categorias title="Best Sellers" />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <ProductCard
          image={productImg}
          title="Café Torrado Notas Cítricas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          price="R$44,44"
        />
        <ProductCard
          image={productImg}
          title="Café Torrado Notas Cítricas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          price="R$44,44"
        />
        <ProductCard
          image={productImg}
          title="Café Torrado Notas Cítricas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          price="R$44,44"
        />
        <ProductCard
          image={productImg}
          title="Café Torrado Notas Cítricas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          price="R$44,44"
        />
      </div>
      <Link href="/products">
        <Button className="bg-[#EE8542] hover:bg-[#ca682c] rounded-full px-6 py-3">
          <p>Ver Tudo</p>
        </Button>
      </Link>
    </section>
  );
};
