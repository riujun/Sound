'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import logoMarketPlace from '@/app/assets/homePage/logoMarketPlace.png';
import Albumes from '@/app/components/Albumes/Albumes';
import Buscador from '@/app/components/Buscador/Buscador';
import CardArtistList from '@/app/components/CadrArtistList/CardArtistList';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import Top from '@/app/components/top10/Topdies';
// import { useStore } from '@/app/store';
interface RespuestaApi {
  _id: string;
}
function Home() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Estado para almacenar el valor de userId
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Obtener el valor del Local Storage
    const respuestaApiStr = localStorage.getItem('respuestaApi');

    // Convertir el valor de vuelta a un objeto JSON y asegurar su tipo con la interfaz
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const respuestaApi: RespuestaApi | null =
      respuestaApiStr != null ? JSON.parse(respuestaApiStr) : null;

    // Acceder al campo _id si respuestaApi no es nulo
    const newUserId = respuestaApi != null ? respuestaApi._id : null;

    // Actualizar el estado con el nuevo valor de userId
    setUserId(newUserId);

    console.log('El valor del campo _id en el Local Storage es:', newUserId);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMediumScreen(window.innerWidth < 768);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col justify-center">
          <div className="flex justify-between pl-3 md:p-6">
            <div className="hidden w-auto md:block">
              <Image className="" src={logoMarketPlace} alt="logo market place" />
            </div>
            <Buscador />
          </div>
          <div className="flex justify-center p-5">
            <div className="text-xl font-semibold leading-normal text-zinc-700 md:text-[32px]">
              {!isMediumScreen && 'Descubre y apoya a nuevo talento musical'}
            </div>
          </div>
          <CardArtistList todos={true} seguidores={false} siguiendo={false} userId={userId ?? ''} />
          <div className="mx-4 my-10 h-px bg-black"></div>
          <Top />
          <Albumes />
          <div className="mb-3 ml-7 text-[11px]">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
