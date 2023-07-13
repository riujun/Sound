import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonTres({ children }: ButtonInicioProps) {
  return (
    <button className="h-[48px] w-[420px] border-[2px] border-orange-500 hover:bg-orange-50 ">
      {children}
    </button>
  );
}
