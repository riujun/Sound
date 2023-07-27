import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonDos({ children }: ButtonInicioProps) {
  return (
    <button className="hidden rounded-lg bg-orange-500 p-[16px] hover:bg-orange-400 md:block md:h-[56px] md:w-[141px] md:text-[16px]">
      {children}
    </button>
  );
}
