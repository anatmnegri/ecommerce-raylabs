import { ProductCard } from "../components/ProductCard";
import productImg from "../..//public/images/productImg.svg";
import { Button } from "@/components/ui/button";

export const Destaques = () => {
  return (
    <section
      className="max-w-7xl mx-auto py-24 flex flex-col items-center gap-10"
      id="destaques"
    >
      <h1 className="text-4xl font-bebas">Nossos Destaques</h1>
      <div className="flex items-center gap-4 font-poppins">
        <Button>
          <p>Mais Pedidos</p>
        </Button>
        <Button>
          <p>Novos Produtos</p>
        </Button>
        <Button>
          <p>Best Sellers</p>
        </Button>
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

      <Button className="bg-[#EE8542] hover:bg-[#ca682c] rounded-full cursor-pointer">
        <p>Ver Tudo</p>
      </Button>
    </section>
  );
};
