/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonDos({ children }: ButtonInicioProps) {
  return <button className="bg-orange-500 p-[16px] hover:bg-orange-400">{children}</button>;
}
