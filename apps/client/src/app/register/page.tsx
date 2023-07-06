import React from 'react';
import Image from 'next/image';
import background from '@/app/assets/auth/soundwave-bg.png';
import FormRegister from '../Components/Auth/FormRegister';

export default function Register() {
  return (
    <>
      <div className="bg-white md:flex md:w-[100%] md:flex-col md:items-center md:justify-center">
        <Image
          src={background}
          alt="Logo"
          width={1669}
          height={619}
          priority
          className=" md:absolute md:w-full"
        />
        <FormRegister />
        <p className="font-normal text-black md:mb-[29px] md:mt-[89px]">
          © 2023 SoundWave | Todos los Derechos Reservados
        </p>
      </div>
    </>
  );
}
