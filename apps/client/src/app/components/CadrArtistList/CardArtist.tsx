'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import LikeOrange from '@/app/assets/Seguir-Like-Orange.png';
import LikeTransparent from '@/app/assets/Seguir-Like-Transparent.png';
export interface Artist {
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
  followers: string[];
  createdAt: string;
  updatedAt: string;
  genre: string;
  __v: number;
  description: string; // Propiedad "description" agregada
}

export default function CardArtist({ artist }: { artist: Artist }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="m-[1%] inline-flex h-[157px] w-[156px] cursor-pointer flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6 md:m-[0.7%] md:h-[213px] md:w-[206px]"
        onClick={() => {
          router.push('/Perfilartist');
        }}
      >
        <div className="inline-flex items-center justify-between gap-2 self-stretch">
          <Image
            alt="imagen artista"
            className="rounded-full"
            src={artist.profilePhoto}
            width="49"
            height="49"
          />
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={isHovered ? LikeOrange : LikeTransparent} alt="seguir" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="max-w-[130px] truncate text-[16px] font-semibold leading-tight text-zinc-700 md:max-w-[180px]">
            {artist.name} {artist.surname}
          </div>
          <div className="max-w-[130px] truncate text-[11px] font-medium text-neutral-500 md:max-w-[180px]">
            {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              artist.genre ?? 'Género'
            }
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
            {
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              artist.followers ? `${artist.followers.length} Seguidores` : '0 Seguidores'
            }
          </div>

          <div className="md:h-px md:w-[171px] md:bg-black"></div>
        </div>
        <div className="h-0 w-0 text-transparent md:h-[106px] md:w-[171px] md:text-xs md:font-normal md:leading-[14px] md:text-zinc-700">
          <p className="m-0 line-clamp-4">{artist.description ?? 'Descripción del artista'}</p>
        </div>
      </div>
    </>
  );
}
