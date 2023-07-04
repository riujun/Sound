/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonUno({ children }: ButtonInicioProps) {
  return <button className="border-[2px] border-orange-500 p-[16px]">{children}</button>;
}
