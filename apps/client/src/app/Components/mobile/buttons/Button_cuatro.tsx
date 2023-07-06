/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonCuatro({ children }: ButtonInicioProps) {
  return (
    <button className="h-[48px] w-[420px] bg-orange-500 hover:bg-orange-400  md:hidden">
      {children}
    </button>
  );
}
