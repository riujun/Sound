// const songs: Song[] = [
//   {
//     id: 1,
//     title: ' She Dont Give a FO ',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
//     artista: 'duki',
//     disco: 'RockStart',
//     duracion: '3.50',
//     price: '$2.4',
//   },
//   {
//     id: 2,
//     title: 'Coco Chanel',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
//     artista: 'Eladio Carrio',
//     disco: 'Cultura',
//     duracion: '3.30',
//     price: '$6.4',
//   },
//   {
//     id: 3,
//     title: 'Bohemian Rhapsody',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
//     artista: 'Queen',
//     disco: 'Bohemian Rhapsody',
//     duracion: '5.24',
//     price: '$12.4',
//   },
//   {
//     id: 4,
//     title: 'Seminare',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921396/X2Download.app-_SEMINARE__-_CHARLY_GARC%C3%8DA_%C3%89pica_versi%C3%B3n_bajo_la_lluvia_-_Quilmes_Rock_2004-_480p_d4j89g.mp4',
//     artista: 'CHARLY GARCÍA ',
//     disco: 'Seminare',
//     duracion: '4.41',
//     price: '$8.4',
//   },
//   {
//     id: 5,
//     title: 'Perfecta',
//     src: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
//     artista: 'Miranda',
//     disco: 'Perfecta',
//     duracion: '3.45',
//     price: '$1.4',
//   },
//   {
//     id: 6,
//     title: 'De Musica Ligera',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921888/musica/X2Download.app-Soda_Stereo_-_De_Musica_Ligera_El_%C3%9Altimo_Concierto_-_480p_uihs9a.mp4',
//     artista: 'Soda Stereo',
//     disco: 'De Musica Ligera',
//     duracion: '4.49',
//     price: '$1.4',
//   },
//   {
//     id: 7,
//     title: 'Seguir Viviendo Sin Tu Amor',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688922018/musica/X2Download.app-Seguir_Viviendo_Sin_Tu_Amor-_480p_ee4slf.mp4',
//     artista: 'Spinetta',
//     disco: 'Sin Tu Amo',
//     duracion: '2.40',
//     price: '$6.4',
//   },
//   {
//     id: 8,
//     title: ' She Dont Give a FO ',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
//     artista: 'duki',
//     disco: 'RockStart',
//     duracion: '3.50',
//     price: '$7.4',
//   },
//   {
//     id: 9,
//     title: 'Coco Chanel',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
//     artista: 'Eladio Carrio',
//     disco: 'Cultura',
//     duracion: '3.30',
//     price: '$3.4',
//   },
//   {
//     id: 10,
//     title: 'Bohemian Rhapsody',
//     src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
//     artista: 'Queen',
//     disco: 'Bohemian Rhapsody',
//     duracion: '5.24',
//     price: '$3.4',
//   },
// ];
/* eslint-disable prettier/prettier */
'use client';

import axios from 'axios';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GoKebabHorizontal } from 'react-icons/go';
import { IoIosPodium } from 'react-icons/io';

import { ButtonCreate } from '../Buttons/seccion/Button_Create';
import type { Song } from '../reprodutorpequeño/ReproductorP';

interface User {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhoto: string;
  favoriteArtists: string[]; // Otra interfaz para los artistas favoritos, si es necesario
  email: string;
  coverPhoto: string;
  password: string;
  songsPurchased: string[]; // Otra interfaz para las canciones compradas, si es necesario
  songsUplodaded: string[]; // Otra interfaz para las canciones subidas, si es necesario
  createdAt: string;
  updatedAt: string;
  __v: number;
  description: string;
}

interface Album {
  _id: string;
  canciones: Song[]; // Otra interfaz para las canciones, si es necesario
  duracion: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function AlbunDetails() {
  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(null);
  const colors = ['bg-orange-200', 'bg-white'];
  const [album, setAlbum] = useState<Album>();
  useEffect(() => {
    const fetchAlbums = async (): Promise<void> => {
      try {
        const response = await axios.get<Album>('http://localhost:4000/albums');
        setAlbum(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    const fetchData = () => {
      fetchAlbums().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in fetchData:', error);
      });
    };

    fetchData();
  }, []);

  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };
  return (
    <div className="mt-20">
      <div className="px-5">
        <section className="flex gap-5 ">
          <div className="w-[206px] ">
            {/* <Image
              className="h-52 w-[206px]  rounded-[2.94px]"
              src={album?.imagen != null || ''}
              alt="img"
            /> */}
          </div>
          <div className="w-[80%]">
            <h3 className="text-[32px] font-medium text-orange-500">{album?.nombre}</h3>
            <p>$ {album?.precio}</p>
            <div className="h-[0px] w-[90%] border border-black"></div>
            <p>Descargas</p>
            <p>{album?.canciones.length}5</p>
            <p>ventas</p>
            {/* <p>$ {album?.precio * album?.canciones.length !== 0 || 0}</p> */}
          </div>
        </section>
      </div>

      <section className="mt-10">
        <section>
          {/* {album?.canciones.length > 0 ? ( */}
          <div className="flex w-full flex-col items-center justify-center px-3">
            <div className="w-[100%]">
              <div className="w-full ">
                <div className="">
                  <table className="w-full ">
                    <thead className="sticky top-0 border-b bg-white">
                      <tr className="h-12 border-b border-zinc-700 text-left text-xs md:text-lg">
                        <th scope="col" className="p-[11px] ">
                          Nombre
                        </th>
                        <th scope="col" className="p-[11px]">
                          Precio
                        </th>
                        <th scope="col" className="p-[11px]">
                          Descargas
                        </th>
                        <th scope="col" className="p-[11px]">
                          Ventas
                        </th>
                        <th scope="col" className="p-[11px]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {album?.canciones.map((song, index) => (
                        <tr
                          key={index}
                          className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${
                            colors[index % colors.length]
                          } text-xs md:text-lg`}
                          onClick={() => {
                            handleSongSelect(index);
                          }}
                        >
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                            <div className="flex items-center gap-1">
                              {selectedSongIndex === index && (
                                <td className="text-[8px]">
                                  <FaPlay />
                                </td>
                              )}
                              <div>{song.name}</div>
                              {selectedSongIndex === index && (
                                <td className="text-[15px]">
                                  <IoIosPodium />
                                </td>
                              )}
                            </div>
                          </td>

                          <td className="px-3 py-4">
                            {album.user.name} {album.user.surname}
                          </td>
                          <td className="px-3 py-4">{album.nombre}</td>
                          <td className="px-3 py-4">{song.duration}</td>
                          <td className="px-3 py-4">{<GoKebabHorizontal />}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* ) : ( */}
          <div className="flex h-[400px] w-full flex-col items-center justify-center gap-20">
            <h3 className="text-[21px]">
              ¡Da a conocer tu talento y comienza a vender tus obras musicales en nuestro
              marketplace!
            </h3>
            <section className="flex flex-col items-center gap-10">
              <ButtonCreate>Cargar Archivo</ButtonCreate>
            </section>
          </div>
          {/* )} */}
        </section>
      </section>
    </div>
  );
}
