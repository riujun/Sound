/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
'use client';
import { signIn } from 'next-auth/react';
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonInicio({ children }: ButtonInicioProps) {
  return (
    <button
      onClick={() => signIn()}
      className="text-center text-[18px] font-normal leading-10 text-black"
    >
      {children}
    </button>
  );
}
