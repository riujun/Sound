'use client';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import LikeHover from '@/app/assets/LikeHoverMobile.png';
import LikeOrange from '@/app/assets/Seguir-Like-Orange.png';
import LikeTransparent from '@/app/assets/Seguir-Like-Transparent.png';
// import { useDataUser } from '@/app/components/Auth/hooks/dataUser';

interface FollowResponse {
  isFollowing: boolean;
}

interface CardArtistProps {
  data: Artist;
  userID: string;
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

export default function CardArtist({ data, userID }: CardArtistProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isFollowing, setIsFollowing] = useState(data.followers.includes(userID));
  const src = isFollowing ? LikeOrange : LikeTransparent;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    router.push('/Perfilartist');
  };

  const handleImageClick = async (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    const artistID = data._id;

    try {
      if (isFollowing) {
        // El usuario sigue al artista, hacemos la solicitud POST para dejar de seguir
        console.log(userID, artistID);
        await axios
          .post(
            `http://localhost:4000/user/unfollow/${userID}`,
            { followerId: artistID },
            { headers: { 'Content-Type': 'application/json' } }
          )
          .then((response) => {
            setIsFollowing(false);
            console.log('Dejaste de seguir al artista');
          })
          .catch((error) => {
            console.error('Error en la solicitud de unfollow:', error);
          });
      } else {
        // El usuario no sigue al artista, hacemos la solicitud POST para seguir
        await axios
          .post(
            `http://localhost:4000/user/addfollower/${userID}`,
            { followerId: artistID },
            { headers: { 'Content-Type': 'application/json' } }
          )
          .then((response) => {
            setIsFollowing(true);
            console.log('Comenzaste a seguir al artista');
          })
          .catch((error) => {
            console.error('Error en la solicitud de seguir:', error);
          });
      }
    } catch (error) {
      console.error('Error al seguir o dejar de seguir al artista:', error);
    }
  };

  useEffect(() => {
    // console.log(userID, artist._id);
    const fetchFollow = async (): Promise<void> => {
      try {
        const response = await axios.get<FollowResponse>(
          `http://localhost:4000/user/isfollowing/${userID}/${data._id}`
        );
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error('Error al verificar si el usuario sigue al artista:', error);
      }
    };

    fetchFollow().catch((error) => {
      // Manejar el error aquí si es necesario
      console.error('Error in fetchFollow:', error);
    });
  }, [userID, data._id]);

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
            src={data.profilePhoto}
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
            {data.name} {data.surname}
          </div>
          <div className="max-w-[130px] truncate text-[11px] font-medium text-neutral-500 md:max-w-[180px]">
            {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              data.genre ?? 'Género'
            }
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
            {
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              data.followers ? `${data.followers.length} Seguidores` : '0 Seguidores'
            }
          </div>
          <div className="md:h-px md:w-[171px] md:bg-black"></div>
        </div>
        <div className="h-0 w-0 text-transparent md:h-[106px] md:w-[171px] md:text-xs md:font-normal md:leading-[14px] md:text-zinc-700">
          <p className="m-0 line-clamp-4">{data.description ?? 'Descripción del artista'}</p>
        </div>
      </div>
    </>
  );
}
