/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';

import compartir from '@/app/assets/compartir.png';
import eliminar from '@/app/assets/eliminar.png';
import subir from '@/app/assets/subir.png';
import type { UserData } from '@/app/components/types/user';

import { ButtonCreate } from '../Buttons/seccion/Button_Create';
import AlertMetodoCobro from '../ModalAlerts/AlertMetodoDeCobro';

interface Song {
  _id: string;
  name: string;
  duration: number;
  user: string;
  coArtist: string;
  price: number;
  genre: string;
  image: string;
  date: string;
  album: string;
  src: string;
  __v: number;
}

export default function Markedplace() {
  const router = useRouter();
  const [songs, setSongs] = useState<Song[]>([]);
  const [data, setData] = useState<UserData | null>(null);
  console.log(songs);
  const [showMyModal, setShowMyModal] = useState(false);
  const [, setSelectedSongIndex] = useState<number | null>(null);
  const colors = ['bg-orange-100', 'bg-white'];
  console.log(data, 'userdata');
  const handleClose = () => {
    setShowMyModal(false);
  };
  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };
  useEffect(() => {
    const url = `http://localhost:4000/user/64c01b43ffa500e4b825dbb5`;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseData: UserData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const url = `http://localhost:4000/user/mysongsuploaded/64c01b43ffa500e4b825dbb5`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData: { songs: Song[][] }) => {
        const flattenedSongs = responseData.songs.flat();
        setSongs(flattenedSongs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const checkPagos = () => {
    if (data?.mercadopagoApproved === true || data?.paypalApproved === true) {
      router.push('/uploadmusic');
    } else {
      setShowMyModal(true);
    }
  };

  return (
    <>
      <div className="mt-20">
        <div className="flex justify-between">
          <h2 className="pl-5 text-[32px] text-orange-500">Marketplace</h2>

          <div className="flex items-center gap-3 pr-5">
            <div className="">
              <Image className="object-cover" src={compartir} alt="logo" />
            </div>
            <div className="h-[48px] w-[48px] ">
              <Image src={eliminar} alt="logo" />
            </div>
            <div className="cursor-pointer object-cover text-orange-400">
              <Image onClick={checkPagos} className="text-orange-400 " src={subir} alt="logo" />
            </div>
          </div>
        </div>
        <div className="border-greey-100 flex  w-full  items-center justify-center border-[1px] "></div>
        <div className="mt-10 flex items-center justify-center ">
          <p className="w-[302px] text-center text-sm font-normal text-black md:w-[40%] md:text-[18px]">
            Aquí tienes la lista de tus alucinantes creaciones musicales publicadas en SoundWave
            Marketplace que van a conquistar los oídos del mundo
          </p>
        </div>
        <section className="mt-5 flex w-full">
          {songs.length > 0 ? (
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
                            Disco
                          </th>
                          <th scope="col" className="p-[11px]">
                            Duracion
                          </th>
                          <th scope="col" className="p-[11px]">
                            Precio
                          </th>
                          <th scope="col" className="p-[11px]">
                            Ventas
                          </th>
                          <th scope="col" className="p-[11px]"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {songs.map((song, index) => (
                          <tr
                            key={index}
                            className={`whitespace-nowrap border-b border-neutral-400  font-medium ${
                              colors[index % colors.length]
                            } text-xs md:text-lg`}
                            onClick={() => {
                              handleSongSelect(index);
                            }}
                          >
                            <td className="px-3 py-4 text-sm">{song.name}</td>
                            <td className="px-3 py-4 text-sm">{song.album}</td>
                            <td className="px-3 py-4 text-sm">{song.duration}</td>
                            <td className="px-3 py-4 text-sm text-black">{song.price}</td>
                            <td className="px-3 py-4 text-sm text-black">
                              <p>5</p>
                            </td>
                            <td className="px-3 py-4">{<GoKebabHorizontal />}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-[400px] w-full flex-col items-center justify-center gap-20">
              <h3 className="text-[21px]">
                ¡Da a conocer tu talento y comienza a vender tus obras musicales en nuestro
                marketplace!
              </h3>
              <section className="flex flex-col items-center gap-10">
                <ButtonCreate>Cargar Archivo</ButtonCreate>
              </section>
            </div>
          )}
        </section>
      </div>
      <AlertMetodoCobro onClose={handleClose} visible={showMyModal} />
    </>
  );
}
