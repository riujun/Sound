'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import type { Song } from '@/app/components/reprodutorpequeño/ReproductorP';
import ReproductorP from '@/app/components/reprodutorpequeño/ReproductorP';

import useDataUsuario from '../hook/DataUser';
import Loader from '../Loader/Loader';
import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';

export default function Topdies() {
  const [showAll, setShowAll] = useState<boolean>(false); // Explicitly specify boolean type
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false); // Explicitly specify boolean type
  const [songs, setSongs] = useState<Song[]>([]);
  const [showMyModal, setShowMyModal] = useState<boolean>(true); // Explicitly specify boolean type
  const idUser = useDataUsuario(); // You might need to provide a type for idUser based on your hook's return type.

  console.log(idUser, 'usuariodata');

  useEffect(() => {
    const fetchSongs = async (): Promise<void> => {
      try {
        const response = await axios.get<Song[]>('http://localhost:4000/songs?limit=10');
        setSongs(response.data);
        setShowMyModal(false);
      } catch (error) {
        console.error('Error fetching songs:', error);
        setShowMyModal(false);
      }
    };

    const fetchData = () => {
      fetchSongs().catch((error) => {
        console.error('Error in fetchData:', error);
        setShowMyModal(false);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const visibleSongs = showAll || !isSmallScreen ? songs : songs.slice(0, 5);
  const halfIndex = Math.ceil(visibleSongs.length / 2);
  const firstHalf = visibleSongs.slice(0, halfIndex);
  const secondHalf = visibleSongs.slice(halfIndex);

  console.log(secondHalf, 'que es');

  const handlePayment = async (song: Song): Promise<void> => {
    try {
      const paymentData = {
        id: song._id,
        user_id: idUser?._id,
        unit_price: song.price,
        quantity: 1,
      };
      console.log(paymentData, 'canciones');
      const response = await axios.post<string>(
        'http://localhost:4000/payment/mercadopago',
        paymentData
      );

      const redirectionLink: string = response.data;
      window.open(redirectionLink, '_blank');

      console.log('pago aprobado ');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <div>
      <h2 className="ml-6 text-xl font-semibold leading-normal text-zinc-700 md:ml-7 md:text-[32px]">
        Top 10 - Lo más vendido por nuestros artistas
      </h2>
      <div className="w-full">
        <Loader visible={showMyModal} />
        <section className={`ml-8 flex flex-wrap pb-7 pt-14 md:flex-row md:items-center md:gap-4`}>
          <div className="md:w-[49%]">
            {firstHalf.map((song, index) => (
              <div key={index} className={`flex-grow`}>
                <ReproductorP songs={[song]} index={index + 1} handlePayment={handlePayment} />
              </div>
            ))}
          </div>
          <div className="md:w-[49%]">
            {secondHalf.map((song, index) => (
              <div key={index} className={`flex-grow`}>
                <ReproductorP songs={[song]} index={index + 6} handlePayment={handlePayment} />
              </div>
            ))}
          </div>
        </section>
        {!showAll && isSmallScreen && (
          <div className="mt-4 flex justify-center">
            <ButtonCuatro onClick={handleShowMore}>VER MÁS</ButtonCuatro>
          </div>
        )}
      </div>
    </div>
  );
}
