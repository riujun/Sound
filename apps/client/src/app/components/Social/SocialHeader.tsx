'use client';
import Image from 'next/image';

import logoSocialPlace from '@/app/assets/logoSocialPlace.png';

import Buscador from '../Buscador/Buscador';

export default function SocialHeader() {
  // Estado para almacenar la página actual
  return (
    <div className="top-2 m-[1%] hidden overflow-auto md:block">
      <div className="flex justify-between pl-3 md:p-6">
        <div className="hidden w-auto md:block">
          <Image className="" src={logoSocialPlace} alt="logo market place" />
        </div>
        <Buscador />
      </div>
      <div className="flex justify-center p-5">
        <div className="text-xl font-semibold leading-normal text-zinc-700 md:text-[32px]">
          Comunidad Musical: Descubre y Apoya al Nuevo Talento
        </div>
      </div>
    </div>
  );
}
