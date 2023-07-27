/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Deshabilitar las reglas de TypeScript para el acceso no seguro a miembros y asignaciones no seguras

'use client'; // No se puede determinar con precisión el propósito de esta declaración, parece un error tipográfico, podría ser 'use strict';

import axios from 'axios'; // Importar la biblioteca axios para hacer solicitudes HTTP
import Image from 'next/image'; // Importar la biblioteca Image de Next.js para mostrar imágenes de manera optimizada
import { type SetStateAction, useEffect, useState } from 'react'; // Importar React hooks necesarios
import { FaPlay } from 'react-icons/fa'; // Importar el ícono de reproducción de la biblioteca react-icons
import { IoIosPodium } from 'react-icons/io'; // Importar el ícono de podium de la biblioteca react-icons

import vector from '@/app/assets/Vector.png'; // Importar una imagen local llamada 'Vector.png'

import { ButtonCreate } from '../components/Buttons/seccion/Button_Create'; // Importar el componente ButtonCreate de la ubicación proporcionada
import Reproductor from '../components/Reproductor/Reproductor'; // Importar el componente Reproductor de la ubicación proporcionada

// Definir la interfaz para representar una canción
export interface Song {
  _id: string;
  name: string;
  duration: number;
  user: User | null;
  coArtist: string;
  price: number;
  genre: string;
  image: string;
  date: Date;
  album: string;
  src: string;
  __v: number;
}

// Definir la interfaz para representar un usuario
export interface User {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhoto: string;
  favoriteArtists: string[];
  email: string;
  coverPhoto: string;
  password: string;
  songsPurchased: [];
  songsUplodaded: [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  description?: string;
  genre: null | string;
  albumes: any[];
  followers: null[];
  mercadopagoApproved: boolean;
  paypalApproved: boolean;
}
interface PlayListProps {
  userId: string;
}
// Función para formatear el tiempo en formato 'mm:ss'
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Min`;
};

// Función para encontrar el índice de un elemento por su ID en un array de objetos
function findIndexById(array: any[], id: string) {
  return array.findIndex((obj) => obj._id === id);
}

// Componente principal PlayList
export default function PlayList({ userId }: PlayListProps) {
  // Estado para almacenar el término de búsqueda de canciones
  const [searchTerm, setSearchTerm] = useState<string>('');
  // Estado para almacenar la lista de canciones recuperadas del servidor
  const [songs, setSongs] = useState<Song[]>([]);

  // Efecto para cargar las canciones del servidor al montar el componente
  useEffect(() => {
    const fetchSongs = async (): Promise<void> => {
      try {
        console.log('userId en playlist: ', userId);
        const response = await axios.get<{ songs: Song[][] }>(
          `http://localhost:4000/user/mysongs/${userId}`
        );
        const songsArray = response.data.songs.flatMap((group) => group); // Flatten the nested arrays to get all songs
        setSongs(songsArray);
        console.log('response.data user mysongs : ', response.data.songs);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    // Función interna para invocar la función de carga de canciones y manejar errores
    const fetchData = () => {
      fetchSongs().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in fetchData:', error);
      });
    };

    // Llamar a la función de carga de datos
    fetchData();
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez al montar el componente

  // Estado para almacenar el índice de la canción seleccionada
  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(0);

  // Lista de colores para alternar en la tabla de canciones
  const colors = ['bg-orange-100', 'bg-white'];

  // Función para manejar la selección de una canción en la lista
  const handleSongSelect = (id: string, indexVisto: SetStateAction<number>) => {
    const index = findIndexById(songs, id);
    console.log('[CAMBIO-SONG]', index);
    setSelectedSongIndex(index); // Actualizar el estado selectedSongIndex con el índice clickeado
  };

  // Función para manejar cambios en el término de búsqueda
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar las canciones según el término de búsqueda
  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlayPause = () => {
    console.log('playpause');
  };
  return (
    <>
      <div className="m-8 flex justify-between">
        <div className="hidden w-auto md:block">
          <div className="text-[32px] font-bold leading-normal text-orange-500">Mi Música</div>
        </div>
        <div className="mt-4 w-[97%] items-center md:mt-2 md:w-[50%]">
          <div className="relative flex h-12 overflow-auto rounded-full border border-gray-500 bg-white focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer w-[100%] border-none pr-2 text-sm text-gray-600  outline-none"
              type="text"
              id="search"
              placeholder="¿Qué quieres escuchar hoy?"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
      </div>
      {songs.length > 0 ? (
        <div className="m-[1%] flex flex-grow flex-col">
          <div className="hidden overflow-x-auto sm:block">
            <div className="inline-block w-full px-4 py-2">
              <div className="">
                <table className="w-[100%]">
                  <thead className="sticky top-0 border-b bg-white">
                    <tr className="h-12 border-b border-zinc-700 text-left">
                      <th scope="col" className="p-[11px]">
                        Nombre
                      </th>
                      <th scope="col" className="p-[11px]">
                        Artista
                      </th>
                      <th scope="col" className="p-[11px]">
                        Disco
                      </th>
                      <th scope="col" className="p-[11px]">
                        Duración
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSongs.map((song, index) => (
                      <tr
                        key={song._id}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${
                          colors[index % colors.length]
                        }`}
                        onClick={() => {
                          handleSongSelect(song._id, index);
                        }}
                      >
                        <td className="cursor-pointer px-3 py-4" onClick={handlePlayPause}>
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
                        <td className="px-3 py-4">{song.user?.username}</td>
                        <td className="px-3 py-4">{song.album}</td>
                        <td className="px-3 py-4">{formatTime(song.duration)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* PLAYLIST PEQUEÑO */}
          <div className="overflow-x-auto sm:hidden">
            <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
              <div className="">
                <table className="w-[98%]">
                  <tbody>
                    {filteredSongs.map((song, index) => (
                      <tr
                        key={song._id}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${
                          colors[index % colors.length]
                        }`}
                        onClick={() => {
                          handleSongSelect(song._id, index);
                        }}
                      >
                        <td className="px-3 py-4 ">
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
                        <td className="px-3 py-4">{song.user?.username}</td>
                        <td className="px-3 py-4">{song.album}</td>
                        <td className="px-3 py-4">{formatTime(song.duration)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-center pt-20">
            <Reproductor songs={songs} onSongSelect={selectedSongIndex} />
          </nav>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <section className="flex flex-col items-center gap-10">
            <Image src={vector} alt="logo vector" />
            <h2 className="ANNoTienesMSicaEnTuListaDeReproducciN w-[449px] text-center text-[32px] font-semibold text-zinc-700">
              Aún no tienes música en tu lista de reproducción
            </h2>
            <ButtonCreate>AGREGAR</ButtonCreate>
          </section>
        </div>
      )}
    </>
  );
}
