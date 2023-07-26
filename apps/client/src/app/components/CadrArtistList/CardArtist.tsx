'use client';
import axios, { type AxiosResponse } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import LikeHover from '@/app/assets/LikeHoverMobile.png';
import LikeOrange from '@/app/assets/Seguir-Like-Orange.png';
import LikeTransparent from '@/app/assets/Seguir-Like-Transparent.png';
import { useDataUser } from '@/app/components/Auth/hooks/dataUser';

interface FollowResponse {
  isFollowing: boolean;
}
export interface Artist {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  followers: string[];
  profilePhoto: string;
  favoriteArtists: string[];
  email: string;
  coverPhoto: string;
  password: string;
  songsPurchased: string[];
  songsUplodaded: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  description: string;
  genre: string;
  albumes: string[];
  mercadopagoApproved: boolean;
  paypalApproved: boolean;
}

export default function CardArtist({ artist }: { artist: Artist }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const userData = useDataUser();
  const userID = userData !== null ? userData._id : '';
  const [isFollowing, setIsFollowing] = useState(false);
  const src = isFollowing ? LikeOrange : LikeTransparent;
  console.log('userID: ' + userID);
  console.log('artist._id: ' + artist._id);
  console.log('estás siguiendo?: ' + (isFollowing ? 'si' : 'no'));
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  console.log('artist.followers: ' + artist.followers);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Verificar si el usuario actual sigue al artista al montar el componente o cuando cambien los IDs
    axios
      .get<FollowResponse>(`http://localhost:4000/user/isfollowing/${userID}/${artist._id}`)
      .then((response: AxiosResponse<FollowResponse>) => {
        setIsFollowing(response.data.isFollowing);
      })
      .catch((error) => {
        console.error('Error al verificar si el usuario sigue al artista:', error);
      });
  }, [userID, artist._id]);

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    const artistID = artist._id;

    if (isFollowing) {
      // El usuario sigue al artista, hacemos la solicitud POST para dejar de seguir
      fetch(`http://localhost:4000/user/unfollow/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artistID }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Actualizamos el estado isFollowing para reflejar el cambio
          setIsFollowing(false);
          console.log('Dejaste de seguir al artista');
        })
        .catch((error) => {
          console.error('Error al dejar de seguir al artista:', error);
        });
    } else {
      // El usuario no sigue al artista, hacemos la solicitud POST para seguir
      fetch(`http://localhost:4000/user/addfollower/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artistID }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Actualizamos el estado isFollowing para reflejar el cambio
          setIsFollowing(true);
          console.log('Comenzaste a seguir al artista');
        })
        .catch((error) => {
          console.error('Error al seguir al artista:', error);
        });
    }
  };

  const handleCardClick = () => {
    // Lógica para el clic en el resto del componente
    router.push('/Perfilartist');
  };

  return (
    <>
      <div
        className="m-[1%] inline-flex h-[157px] w-[156px] cursor-pointer flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6 hover:shadow-xl md:m-[0.7%] md:h-[213px] md:w-[206px]"
        onClick={handleCardClick}
      >
        <div className="inline-flex items-center justify-between gap-2 self-stretch">
          <Image
            alt="imagen artista"
            className="rounded-full"
            src={artist.profilePhoto}
            width="49"
            height="49"
          />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
          >
            <Image src={isHovered ? LikeHover : src} alt="seguir" />
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
