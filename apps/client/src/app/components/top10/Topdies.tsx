/* eslint-disable prettier/prettier */
'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import type { Song } from '@/app/components/reprodutorpequeño/ReproductorP';
import ReproductorP from '@/app/components/reprodutorpequeño/ReproductorP';

import Loader from '../Loader/Loader';
import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';

export default function Topdies() {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const [showMyModal, setShowMyModal] = useState(true);

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
        // Manejar el error aquí si es necesario
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
                <ReproductorP songs={[song]} index={index + 1} />
              </div>
            ))}
          </div>
          <div className="md:w-[49%]">
            {secondHalf.map((song, index) => (
              <div key={index} className={`flex-grow`}>
                <ReproductorP songs={[song]} index={index + 6} />
              </div>
            ))}
          </div>
        </section>
        {!showAll && isSmallScreen && (
          <div className="flex justify-center mt-4">
            <ButtonCuatro onClick={handleShowMore}>VER MÁS</ButtonCuatro>
          </div>
        )}
      </div>
    </div>
  );
}
