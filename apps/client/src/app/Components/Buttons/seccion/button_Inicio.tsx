import React, { ReactNode } from 'react';

type ButtonInicioProps = {
  children: ReactNode;
};

export function ButtonInicio({ children }: ButtonInicioProps) {
  return (
    <button className='text-center text-black text-[18px] font-normal leading-10'>
      {children}
    </button>
  );
}
