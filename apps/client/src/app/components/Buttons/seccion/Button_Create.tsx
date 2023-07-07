import React, { type ReactNode } from 'react';

interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonCreate({ children }: ButtonInicioProps) {
  return (
    <button className="inline-flex h-[52px] w-[150px] items-center justify-center gap-2.5 p-4 text-[16px] lowercase text-black hover:bg-orange-400 md:bg-orange-500  md:text-[18px] md:font-semibold">
      {children}
    </button>
  );
}
