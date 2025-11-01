import Image from "next/image";
import HeroImg from "../../public/images/HeroImg.svg";
import { Button } from "@/components/ui/button";

interface HeroProps {
  imageUrl: string;
  title?: string;
  infosCard: boolean;
}

export const Hero = ({ imageUrl, title, infosCard }: HeroProps) => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[400px] md:h-[680px] flex items-center justify-center">
        <Image
          src={imageUrl || HeroImg}
          alt="Café e balcão"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16">
          <h1
            className="
              text-white
              font-bebas
              font-bold
              text-[64px] md:text-[120px]
              uppercase
              drop-shadow-lg
              text-center
            "
          >
            {title}
          </h1>
        </div>
      </div>

      <div
        className={` ${
          infosCard ? "grid" : "hidden"
        } rounded-lg bg-[#F8F6F3] border  grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-6 py-10 -top-18 relative`}
      >
        <div className="flex flex-col gap-4 border-r">
          <h2 className="text-xl font-semibold font-bebas">
            CAFÉ DE QUALIDADE NA SUA CASA
          </h2>
          <p className="text-sm font-poppins text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button className=" w-fit">SAIBA MAIS</Button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bebas font-semibold">KOFFEE</h2>
          <p className="text-sm font-poppins text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </section>
  );
};
