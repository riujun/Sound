/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonInicio({ children }: ButtonInicioProps) {
  return (
    <button className="text-center text-[18px] font-normal leading-10 text-black">
      {children}
    </button>
  );
}
