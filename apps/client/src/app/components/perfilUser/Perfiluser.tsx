/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface UserData {
  name: string;
  surname: string;
  genero: string;
  description: string;
}

export default function Perfiluser() {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const url = 'http://localhost:4000/user/64bfb94d0edd8b1c9c00931d';
    fetch(url)
      .then((response) => response.json())
      .then((responseData: UserData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data != null && (
        <>
          <div className="h-[208px] w-[100%] bg-green-100 md:h-[352px]">
            <Image
              className="w-[100%]"
              src="https://res.cloudinary.com/dmxriftxk/image/upload/v1690159537/Rectangle_58_fj0srd.png"
              alt="portada"
              width={1200}
              height={600}
            />
          </div>
          <div className="flex w-full flex-col items-center md:mt-10 md:h-[110px] md:flex-row">
            <div className="relative bottom-20">
              <div className="flex w-[300px] flex-col items-center justify-center ">
                <Image
                  className="h-[127] w-[127px] object-cover"
                  src="https://res.cloudinary.com/dmxriftxk/image/upload/v1690159567/Ellipse_3_b6khfs.png"
                  alt="usuario"
                  width={120}
                  height={127}
                />
                <h2 className="font-none text-[24px] ">
                  {data.name} {data.surname}
                </h2>
                <p>{data.genero}</p>
              </div>
            </div>
            <div className="bg-black md:mb-2 md:mt-2 md:w-[1px] "></div>
            <div className="relative bottom-10 md:ml-12 md:w-[70%] md:pt-5 ">
              <div className="flex w-[100%] items-center justify-between">
                <p className="text-[18px]">acerca del artista</p>
                <div className="inline-flex h-12 w-[60px] items-center justify-center">
                  <div className="w-[60px] text-center text-sm font-normal leading-[48px] text-black">
                    Editar
                  </div>
                </div>
              </div>
              <p className="text-[21px]">{data.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
