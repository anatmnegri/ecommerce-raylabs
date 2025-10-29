"use client";
import Image from "next/image";
import logo from "../../public/images/Logo.svg";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full h-20 bg-[#F8F7F3] flex items-center justify-between">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo Koffee"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="flex items-center gap-10 text-sm tracking-widest">
          <Link
            href="#destaques"
            className="text-[#393330] hover:text-[#EE8542] transition-colors"
          >
            DESTAQUES
          </Link>
          <Link
            href="#produtos"
            className="text-[#393330] hover:text-[#EE8542] transition-colors"
          >
            PRODUTOS
          </Link>
          <Link
            href="#sobre"
            className="text-[#393330] hover:text-[#EE8542] transition-colors"
          >
            SOBRE
          </Link>
        </nav>

        <div className="flex items-center gap-6 text-sm tracking-widest text-[#393330]">
          <button className="hover:text-[#EE8542] cursor-pointer transition-colors">
            <Link href="/orders" className="relative flex flex-col ">
              <span>OLÁ, FULANO</span>
              <span className="text-xs">Ver Pedidos</span>
            </Link>
          </button>

          <button
            className="hover:text-[#EE8542] cursor-pointer transition-colors relative"
            aria-label="Abrir carrinho"
          >
            <Link href="/checkout" className="relative">
              <ShoppingBag className="w-5 h-5 text-[#393330] hover:text-[#EE8542] transition" />
              <span className="absolute -top-2 -right-2 bg-[#EE8542] text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
