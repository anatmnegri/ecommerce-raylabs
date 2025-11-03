"use client";
import Image from "next/image";
import logo from "../../public/images/Logo.svg";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCustomers } from "@/hooks/useCustomer";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: customers, loading, error } = useCustomers();
  const { getTotalItems } = useCart();

  const customerId = "38c70215-96f3-4bba-85cb-b051d2f98268";
  const customer = customers.find((c) => c.id === customerId);
  const customerName = customer
    ? customer.name.split(" ")[0].toUpperCase()
    : "FULANO";

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
          <button className="hover:text-[#EE8542] cursor-pointer transition-colors">
            <Link href="/orders" className="relative flex flex-col">
              <span>OLÁ, {customerName}</span>
              <span className="text-xs">Ver Pedidos</span>
            </Link>
          </button>

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
