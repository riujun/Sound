import React from 'react';
import Image from 'next/image';

import background from '@/app/assets/auth/soundwave-bg.png';
import FormLogin from '../Components/Auth/FormLogin';
export default function Login() {
  return (
    <>
      <div className="bg-white md:flex md:w-[100%] md:flex-col md:items-center md:justify-center">
        <Image
          src={background}
          alt="Logo"
          width={1669}
          height={619}
          priority
          className="hidden md:absolute md:w-full"
        />
        <FormLogin />
        <p className="font-normal text-black md:mb-[29px] md:mt-[89px]">
          © 2023 SoundWave | Todos los Derechos Reservados
        </p>
      </div>
    </>
  );
}
