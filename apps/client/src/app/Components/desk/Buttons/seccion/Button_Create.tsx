/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';

interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonCreate({ children }: ButtonInicioProps) {
  return (
    <button className="inline-flex h-[52px] w-[150px] items-center justify-center gap-2.5 bg-orange-500 p-4 text-[16px] font-semibold lowercase  text-black hover:bg-orange-400">
      {children}
    </button>
  );
}
