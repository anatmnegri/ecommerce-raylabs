"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useCustomers } from "@/hooks/useCustomer";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";

interface UserSelectorProps {
  className?: string;
}

export const UserSelector = ({ className = "" }: UserSelectorProps) => {
  const { selectedUserId, setSelectedUserId } = useUser();
  const { data: customers, loading, error } = useCustomers();
  const router = useRouter();

  const customer = customers.find((c) => c.id === selectedUserId);
  const customerName = customer
    ? customer.name.split(" ")[0].toUpperCase()
    : "FAÇA SEU LOGIN";

  const handleUserSelect = (customerId: string) => {
    setSelectedUserId(customerId);
  };

  const handleOrdersClick = () => {
    if (selectedUserId) {
      router.push('/orders');
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="hover:text-[#EE8542] cursor-pointer transition-colors flex items-center gap-1">
            <span>{customer ? `OLÁ, ${customerName}` : "FAÇA SEU LOGIN"}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {selectedUserId && (
            <DropdownMenuItem
              className="hover:text-[#EE8542] cursor-pointer transition-colors"
              onClick={handleOrdersClick}
            >
              Ver Meus Pedidos
            </DropdownMenuItem>
          )}
          <DropdownMenuLabel>
            {selectedUserId ? "Mudar para conta:" : "Selecione uma conta:"}
          </DropdownMenuLabel>
          {loading && <DropdownMenuItem>Carregando...</DropdownMenuItem>}
          {error && (
            <DropdownMenuItem>Erro ao carregar usuários</DropdownMenuItem>
          )}
          {!loading && customers.length === 0 && (
            <DropdownMenuItem>Nenhum usuário cadastrado</DropdownMenuItem>
          )}
          {!loading &&
            customers.map((c) => (
              <DropdownMenuItem
                className="hover:text-[#EE8542] cursor-pointer transition-colors"
                key={c.id}
                onClick={() => handleUserSelect(c.id)}
              >
                {c.name}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
