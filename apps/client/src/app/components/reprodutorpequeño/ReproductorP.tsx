/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoIosMore, IoIosPodium } from 'react-icons/io';
import { TbPlayerPlayFilled, TbPlaystationSquare } from 'react-icons/tb';

import img from '@/app/assets/landingpage/p.jpg';
import MyModal from '@/app/components/ModalAlerts/AlertMetodoDePago';

interface Song {
  id: number;
  title: string;
  src: string;
  artista: string;
  price: string;
  disco: string;
  duracion: string;
}

interface ReproductorProps {
  songs: Song[];
}

const ReproductorP: React.FC<ReproductorProps> = ({ songs }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleClose = () => {
    setShowMyModal(false);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handlePlayPause = async () => {
      if (isPlaying) {
        try {
          // @ts-expect-error
          await audioElement.play();
        } catch (error) {}
      } else {
        // @ts-expect-error
        audioElement.pause();
      }
    };

    void handlePlayPause();
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // const handleButtonClick = () => {
  //   setShowMyModal(true);
  // };

  return (
    <div>
      <audio ref={audioRef} src={songs[0].src} />

      <div className="flex h-[55px] w-[450px] items-center justify-evenly border-b-[1px] border-black">
        <h5>{songs[0].id}</h5>

        <div className="flex items-center gap-5">
          <div>
            <Image className="h-[42px] w-[42px]" src={img} alt="img" />
          </div>

          <div>
            <p className="w-[118px] text-[14px]">{songs[0].title}</p>
            <p className="text-[12px]">{songs[0].artista}</p>
          </div>
        </div>

        <IoIosPodium className={`text-lg ${isPlaying ? 'text-orange-500' : ''}`} />

        <button
          className="group relative border px-6"
          onClick={() => {
            setShowMyModal(true);
          }}
        >
          <span>{songs[0].price}</span>

          <span className="absolute left-1/2 -translate-x-1/2 transform bg-orange-500 px-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Comprar
          </span>
        </button>

        <div>
          <button
            onClick={() => {
              handlePlayPause();
            }}
          >
            {isPlaying ? (
              <TbPlaystationSquare className="cursor-pointer text-3xl text-orange-500" />
            ) : (
              <div className="rounded-full border border-orange-500 p-1">
                <TbPlayerPlayFilled className="cursor-pointer text-orange-500" />
              </div>
            )}
          </button>
        </div>

        <IoIosMore className="cursor-pointer" />
      </div>
      <MyModal onClose={handleClose} visible={showMyModal} />
    </div>
  );
};

export default ReproductorP;
