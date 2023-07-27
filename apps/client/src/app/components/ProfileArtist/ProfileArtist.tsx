/* eslint-disable turbo/no-undeclared-env-vars */
/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';

import type { Artist } from '../CadrArtistList/CardArtist';

const ProfileArtist = () => {
  const [respuestaGuardada, setRespuestaGuardada] = useState<Artist | null>(null);

  useEffect(() => {
    // Recuperar los datos del Local Storage al cargar el componente
    const respuestaApi = localStorage.getItem('dataArtistLS');
    if (respuestaApi != null) {
      const dataArtist: Artist = JSON.parse(respuestaApi) as Artist; // Explicitly type as UserData
      setRespuestaGuardada(dataArtist);
    }
  }, []);

  return (
    <>
      {respuestaGuardada != null && (
        <div>
          <div className="h-[208px] w-[100%] bg-green-100  md:h-[352px]">
            <Image
              className="h-[100%] w-[100%] object-cover"
              src={respuestaGuardada.coverPhoto}
              alt="portada"
              width={1200}
              height={352}
            />
          </div>
          <div className="flex w-full flex-col items-center md:mt-10 md:h-[110px] md:flex-row">
            <div className="relative bottom-20">
              <div className="flex w-[300px] flex-col items-center justify-center">
                <label htmlFor="profile-photo" className="h-[127] w-[127px] cursor-pointer">
                  <Image
                    className="h-[127] w-[127px] rounded-[100%] object-cover"
                    src={respuestaGuardada.profilePhoto}
                    alt="usuario"
                    width={120}
                    height={127}
                  />
                  <div className="ml-24 ">
                    <FaCamera />
                  </div>
                </label>
                <input
                  type="file"
                  id="profile-photo"
                  accept="image/*"
                  style={{ display: 'none' }}
                  // onChange={handleImageChange}
                />
                <h2 className="font-none text-[24px] ">
                  {respuestaGuardada.name} {respuestaGuardada.surname}
                </h2>
                <p>{respuestaGuardada.genre}</p>
              </div>
            </div>
            <div className=" relative right-7 hidden h-[0px] w-[131px] border border-gray-500 md:block md:rotate-90"></div>
            <div className="bg-black md:mb-2 md:mt-2 md:w-[1px] "></div>
            <div className="bottom-10 md:relative md:right-[100px] md:ml-12 md:w-[70%] md:pt-5 ">
              <div className="flex w-[100%] items-center justify-between">
                <p className="text-[18px] text-lg font-bold text-neutral-400">acerca del artista</p>
                <div>
                  <Link href={'/Mydata'}>
                    <div className="flex items-center text-center text-lg font-normal leading-[48px] text-black">
                      Editar <FiEdit3 />
                    </div>
                  </Link>
                </div>
              </div>
              <p className="text-[21px] font-medium text-black">{respuestaGuardada.description}</p>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default ProfileArtist;
