'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LikeOrange from '@/app/assets/Seguir-Like-Orange.png';
import LikeTransparent from '@/app/assets/Seguir-Like-Transparent.png';
export interface Artist {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhotoUrl: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  favoriteArtists: string[]; // Cambiar el tipo si es diferente del ejemplo proporcionado
  image: string;
  songsPurchased: string[]; // Cambiar el tipo si es diferente del ejemplo proporcionado
  songsUplodaded: string[]; // Cambiar el tipo si es diferente del ejemplo proporcionado
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
      <div className="m-[1%] inline-flex h-[157px] w-[156px] cursor-pointer flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6 md:m-[0.7%] md:h-[213px] md:w-[206px]" onClick={() => {
            router.push('/Perfilartist');
          }}>
        <div className="inline-flex items-center self-stretch justify-between gap-2">
          <Image
            alt="imagen artista"
            className="rounded-full"
            src={"https://res.cloudinary.com/dnemqmc7a/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689019059/image_bahgnt.jpg?_s=public-apps"}
            width="49"
            height="49"
          />
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={isHovered ? LikeOrange : LikeTransparent} alt="seguir"/>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[16px] font-semibold truncate leading-tight max-w-[130px] md:max-w-[180px] text-zinc-700">{artist.name} {artist.surname}</div>
          <div className="text-[11px] font-medium truncate max-w-[130px] md:max-w-[180px] text-neutral-500">Género: {artist.username}</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
           {artist.__v} Seguidores
          </div>
          <div className="md:h-px md:w-[171px] md:bg-black"></div>
        </div>
        <div className="h-0 w-0 text-transparent md:h-[106px] md:w-[171px] md:text-xs md:font-normal md:leading-[14px] md:text-zinc-700">
          <p className="m-0 line-clamp-4">
            Breve descripción del artista: {artist.name} {artist.surname} es {artist.artist? "artista" : "usuario"} {artist.username} | email: {artist.email} | desde: {artist.createdAt} | artistas favoritos: {artist.favoriteArtists}
          </p>
        </div>
      </div>
    </>
  );
}
