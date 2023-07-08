/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useState } from 'react';

import vector from '@/app/assets/Vector.png';
import HeaderGlobal from '@/app/components/header-global/Header_Global';

import { ButtonCreate } from '../components/Buttons/seccion/Button_Create';
import Menu from '../components/menu/Menu';
import Reproductor from '../components/Reproductor/Reproductor';

interface Song {
  title: string;
  src: string;
  artista: string;
  disco: string;
  duracion: string;
}

export default function Page() {
  const songs: Song[] = [
    {
      title: ' She Dont Give a FO ',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
      artista: 'duki',
      disco: 'RockStart',
      duracion: '3.50',
    },
    {
      title: 'Coco Chanel',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
      artista: 'Eladio Carrio',
      disco: 'Cultura',
      duracion: '3.30',
    },
    {
      title: 'Canción 3',
      src: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
      artista: 'Artista 3',
      disco: 'Disco 3',
      duracion: '3.00',
    },
  ];

  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(null);

  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };

  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />

        {songs.length > 0 ? (
          <div className="flex w-full flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Artista
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Disco
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Duracion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {songs.map((song, index) => (
                        <tr
                          key={index}
                          className={`border-b ${
                            selectedSongIndex === index ? 'bg-orange-50' : 'bg-white'
                          }`}
                          onClick={() => {
                            handleSongSelect(index);
                          }}
                        >
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {song.title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            {song.artista}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            {song.disco}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            {song.duracion}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <nav className="flex items-center justify-center pt-10">
              <Reproductor songs={songs} onSongSelect={handleSongSelect} />
            </nav>
          </div>
        ) : (
          <div className="flex  w-full items-center justify-center">
            <section className="flex flex-col items-center  gap-10">
              <Image src={vector} alt="logo vector" />
              <h2 className="ANNoTienesMSicaEnTuListaDeReproducciN w-[449px] text-center text-[32px] font-semibold text-zinc-700">
                Aún no tienes música en tu lista de reproducción
              </h2>
              <ButtonCreate>AGREGAR</ButtonCreate>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
