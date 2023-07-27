'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
export interface Album {
  _id: string;
  canciones: string[]; // Otra interfaz para las canciones, si es necesario
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

export default function CardAlbum({ album }: { album: Album }) {
  const [isValidImageUrl, setIsValidImageUrl] = useState(false);
  // const artistName =
  // album.user && album.user.name !== '' && album.user.surname !== ''
  //   ? `${album.user.name} ${album.user.surname}`
  //   : 'Nombre del Artista';
  const router = useRouter();
  const artistName =
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    album.user && album.user.name !== '' && album.user.surname !== ''
      ? `${album.user.name} ${album.user.surname}`
      : 'Nombre del Artista';

  const handleCardClick = () => {
    localStorage.setItem('dataAlbumLS', JSON.stringify(album));
    const url = `/detailalbun`;
    // Pass the dataString as a query parameter to PerfilArtist page
    router.push(url);
  };
  useEffect(() => {
    const checkImageUrlValidity = async () => {
      try {
        const response = await fetch(album.imagen);
        if (response.ok) {
          setIsValidImageUrl(true);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setIsValidImageUrl(false);
      }
    };

    const fetchData = () => {
      checkImageUrlValidity().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in checkImageUrlValidity:', error);
      });
    };
    fetchData();
  }, [album.imagen]);
  return (
    <>
      <div
        className="m-[0.8%] inline-flex h-[261px] w-[156px] cursor-pointer flex-col items-start justify-start gap-4 hover:shadow-xl md:h-[319px] md:w-[206px]"
        onClick={handleCardClick}
      >
        {isValidImageUrl ? (
          <Image
            alt="tapa del album"
            className="h-[157px] rounded-[2.94px] object-cover md:h-52 md:w-[206px]"
            src={album.imagen}
            width="206"
            height="208"
          />
        ) : (
          <Image
            alt="tapa del album"
            className="rounded-[2.94px] object-cover md:h-52 md:w-[206px]"
            src={'https://via.placeholder.com/206x208'}
            width="206"
            height="208"
          />
        )}
        <div className="h-10 w-[156px] md:h-[49px] md:w-[206px]">
          <div className="left-0 top-0 w-[156px] truncate text-base font-semibold text-zinc-700 md:w-[206px] md:text-2xl">
            {/* Nombre Álbum */}
            {album.nombre ?? 'Nombre del Álbum'}
          </div>
          <div className="left-0 top-[18px] w-[156px] truncate text-sm font-medium text-neutral-500 md:top-[27px] md:text-xl">
            {/* Nombre Artista */}
            {artistName}
          </div>
        </div>
        <div className="inline-flex cursor-pointer items-center justify-center gap-2.5 self-stretch rounded border border-zinc-700 px-5 py-2">
          <div className="text-center text-xs font-medium leading-[13.46px] text-zinc-700">
            $ {album.precio ?? 0}
          </div>
        </div>
      </div>
    </>
  );
}
