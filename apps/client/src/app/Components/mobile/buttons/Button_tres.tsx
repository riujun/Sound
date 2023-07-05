/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonTres({ children }: ButtonInicioProps) {
  return <button className="h-[48px] w-[320px] border-[2px] border-orange-500 ">{children}</button>;
}
