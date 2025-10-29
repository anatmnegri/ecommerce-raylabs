import Image from "next/image";
import HeroImg from "../../public/images/HeroImg.svg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[400px] md:h-[680px]">
        <Image
          src={HeroImg}
          alt="Café e balcão"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="bg-[#F8F6F3] rounded-lg border grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-6 py-10 -top-18 relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bebas">CAFÉ DE QUALIDADE NA SUA CASA</h2>
          <p className="text-sm font-poppins text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button className="bg-[#EE8542] hover:bg-[#ca682c] text-white rounded-full w-fit">
            SAIBA MAIS
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bebas">KOFFEE</h2>
          <p className="text-sm font-poppins text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </section>
  );
};
