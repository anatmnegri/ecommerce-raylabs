import React from "react";
import { Button } from "@/components/ui/button";

interface CategoriasProps {
  title: string;
  icon?: React.ComponentType;
  variant?: "default" | "outline";
}

export const Categorias = ({ title, icon, variant }: CategoriasProps) => {
  return (
    <Button variant={variant || "outline"} className="rounded-full px-6 py-3 ">
      {icon && React.createElement(icon)}
      <p>{title}</p>
    </Button>
  );
};
