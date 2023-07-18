/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoIosMore, IoIosPodium } from 'react-icons/io';
import { TbPlayerPlayFilled, TbPlaystationSquare } from 'react-icons/tb';
import MetodoDePago from '@/app/components/ModalAlerts/AlertMetodoDePago';

// TODAS LAS ALERTAS DEL SITIO - IR BORRANDO A MEDIDA QUE SE UTILIZAN
// import PagoExitoso from '@/app/components/ModalAlerts/AlertPagoExitoso';
// import PagoError from '@/app/components/ModalAlerts/AlertPagoError';
// import FotoPortadaUsuario from '@/app/components/ModalAlerts/AlertFotoPortadaUsuario';
// import FotoPortadaAlbum from '@/app/components/ModalAlerts/AlertFotoPortadaAlbum';
// import ArchivoDeAudio from '@/app/components/ModalAlerts/AlertArchivoDeAudio';
// import AlertEliminarArchivos from '../ModalAlerts/AlertEliminarArchivos';
// import MetodoDeCobro from '../ModalAlerts/AlertMetodoDeCobro';
// import AlertMetodoCobro from '../ModalAlerts/AlertMetodoDeCobro';
// import AlertFelicidades from '../ModalAlerts/AlertFelicidades';
// import AlertPublicarComentario from '../ModalAlerts/AlertPublicarComentario';

import img from '@/app/assets/landingpage/p.jpg';

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

  return (
    <div className='md:w-[49%] w-full'>
      <audio ref={audioRef} src={songs[0].src} />

      <div className="flex h-[55px] w-full items-center justify-evenly border-b-[1px] border-black">
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
          className="relative px-6 border group"
          onClick={() => {
            setShowMyModal(true);
          }}
        >
          <span>{songs[0].price}</span>

          <span className="absolute px-2 text-black transition-opacity duration-300 transform -translate-x-1/2 bg-orange-500 opacity-0 left-1/2 group-hover:opacity-100">
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
              <TbPlaystationSquare className="text-3xl text-orange-500 cursor-pointer" />
            ) : (
              <div className="p-1 border border-orange-500 rounded-full">
                <TbPlayerPlayFilled className="text-orange-500 cursor-pointer" />
              </div>
            )}
          </button>
        </div>

        <IoIosMore className="cursor-pointer" />
      </div>
      <MetodoDePago onClose={handleClose} visible={showMyModal} />
      
      {/* TODAS LAS ALERTAS DEL SITIO - IR BORRANDO A MEDIDA QUE SE UTILIZAN */}
      {/* <PagoExitoso onClose={handleClose} visible={showMyModal} /> */}
      {/* <PagoError onClose={handleClose} visible={showMyModal} /> */}
      {/* <FotoPortada onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertEliminarArchivos onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertMetodoCobro onClose={handleClose} visible={showMyModal} /> */}
      {/* <FotoPortadaAlbum onClose={handleClose} visible={showMyModal} /> */}
      {/* <ArchivoDeAudio onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertFelicidades onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertPublicarComentario onClose={handleClose} visible={showMyModal} /> */}
    </div>
  );
};

export default ReproductorP;
