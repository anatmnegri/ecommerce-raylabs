"use client";
import Image from "next/image";
import logo from "../../public/images/Logo.svg";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { UserSelector } from "@/components/UserSelector";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 shadow-sm fixed top-0 left-0 w-full h-16 sm:h-20 bg-[#F8F7F3] flex items-center justify-between">
      <div className="flex w-full justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo Koffee" width={80} height={32} />
        </Link>

        <nav className="hidden sm:flex items-center gap-10 text-sm tracking-widest">
          <Link
            href="#destaques"
            className="text-[#393330] hover:text-[#EE8542] transition-colors"
          >
            DESTAQUES
          </Link>
          <Link
            href="/products"
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

        <div className="hidden sm:flex items-center gap-6 text-sm tracking-widest text-[#393330]">
          <UserSelector />

          <button
            className="hover:text-[#EE8542] cursor-pointer transition-colors relative"
            aria-label="Abrir carrinho"
          >
            <Link href="/checkout" className="relative">
              <ShoppingBag className="w-5 h-5 text-[#393330] hover:text-[#EE8542] transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EE8542] text-white text-xs rounded-full px-1 min-w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </button>
        </div>

        <div className="flex sm:hidden items-center gap-4">
          <UserSelector className="text-xs" />
          <button
            className="hover:text-[#EE8542] cursor-pointer transition-colors relative"
            aria-label="Abrir carrinho"
          >
            <Link href="/checkout" className="relative">
              <ShoppingBag className="w-5 h-5 text-[#393330] hover:text-[#EE8542] transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EE8542] text-white text-xs rounded-full px-1 min-w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </button>
          <button
            onClick={toggleMenu}
            className="text-[#393330] hover:text-[#EE8542] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#F8F7F3] shadow-lg sm:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="#destaques"
              className="text-[#393330] hover:text-[#EE8542] transition-colors py-2 border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              DESTAQUES
            </Link>
            <Link
              href="/products"
              className="text-[#393330] hover:text-[#EE8542] transition-colors py-2 border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUTOS
            </Link>
            <Link
              href="#sobre"
              className="text-[#393330] hover:text-[#EE8542] transition-colors py-2 border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE
            </Link>
            <Link
              href="/orders"
              className="text-[#393330] hover:text-[#EE8542] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              MEUS PEDIDOS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
