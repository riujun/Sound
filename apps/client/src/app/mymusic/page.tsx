/* eslint-disable prettier/prettier */
'use client';
import React, { useEffect, useState } from 'react';

import HeaderGlobal from '@/app/components/header-global/Header_Global';

import Menu from '../components/menu/Menu';
import PlayList from './playlist';
interface RespuestaApi {
  _id: string;
}
export default function Page() {
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

    console.log('page de mymusic _id en el Local Storage:', newUserId);
  }, []);
  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col justify-center">
          {userId != null && <PlayList userId={userId} />}
          <div className="mb-3 ml-7 text-[11px]">
            Â© 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </div>
  );
}
