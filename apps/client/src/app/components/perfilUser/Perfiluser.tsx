/* eslint-disable prettier/prettier */
import Image from 'next/image';

import editar from '@/app/assets/Boton_Editar.png';
import portada from '@/app/assets/landingpage/soundwave.png';
import userBig from '@/app/assets/userBig.png';
export default function Perfiluser() {
  return (
    <div>
      <div className="h-[352px] w-full bg-green-100">
        <Image className="object-cover w-full h-full" src={portada} alt="portada" />
      </div>
      <div className="flex h-[110px] w-full ">
        <div className="relative bottom-20">
          <div className="flex w-[300px] flex-col items-center justify-center">
            <Image className="h-[127] w-[127px]" src={userBig} alt="usuario" />
            <h2 className="font-none text-[24px] ">Nombre Usuario</h2>
            <p>genero</p>
          </div>
        </div>
        <div className="mb-2 mt-2 w-[1px] bg-black"></div>
        <div className="ml-12 w-[70%] pt-5">
          <p className="text-[18px]">acerca dela artista</p>
          <p className="text-[21px]">escribe una breve descripcion acerca de ti</p>
        </div>
        <div className="pt-5 pr-3">
          <Image className="h-[48px] w-[69px]" src={editar} alt="editar" />
        </div>
      </div>
    </div>
  );
}
