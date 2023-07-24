import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonCuatro({ children }: ButtonInicioProps) {
  return (
    <button className="h-[48px] w-[340px] rounded-lg bg-orange-500 font-bold hover:bg-orange-400">
      {children}
    </button>
  );
}
