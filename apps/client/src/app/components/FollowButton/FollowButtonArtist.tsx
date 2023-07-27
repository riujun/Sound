/* eslint-disable prettier/prettier */
'use client';
import React, { useEffect, useState } from 'react';

import type { Artist } from '../CadrArtistList/CardArtist';
// import dataUsuario from '@/app/components/hook/DataUser';
import CardArtistList from '../CadrArtistList/CardArtistList';
// import CardArtist from '../CadrArtistList/CardArtist';

const FollowButtonArtist: React.FC = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const [respuestaGuardada, setRespuestaGuardada] = useState<Artist | null>(null);
  const showFollowersList = () => {
    console.log('Mostrar lista de seguidores');
    setShowFollowers(true);
    setShowFollowing(false);
  };

  const showFollowingList = () => {
    console.log('Mostrar lista de seguidos');
    setShowFollowers(false);
    setShowFollowing(true);
  };

  // Estado para almacenar el valor de userId

  useEffect(() => {
    // Recuperar los datos del Local Storage al cargar el componente
    const respuestaApi = localStorage.getItem('dataArtistLS');
    if (respuestaApi != null) {
      const dataArtist: Artist = JSON.parse(respuestaApi) as Artist; // Explicitly type as UserData
      setRespuestaGuardada(dataArtist);
    }
  }, []);

  return (
    <div className="mt-16">
      <nav className="flex items-center justify-center">
        <div className="bouder border-orange-400g- orange-300 flex h-[48px] w-[361px] items-center justify-center gap-10  rounded-lg  border-[3px] border-orange-500 bg-orange-300 text-center text-lg font-semibold text-black">
          <div className="ml-3 ">
            <button
              className={
                showFollowing ? 'rounded-[7px] bg-white px-10 py-[3px]  ' : 'px-10 py-[3px]'
              }
              onClick={showFollowingList}
            >
              Siguiendo
            </button>
          </div>
          <div className="mr-3">
            <button
              className={showFollowers ? 'rounded-[7px] bg-white px-10 py-[3px]' : 'px-10 py-[3px]'}
              onClick={showFollowersList}
            >
              Seguidores
            </button>
          </div>
        </div>
      </nav>
      <section className="min-h-[280px]">
        {showFollowers && (
          <CardArtistList
            todos={false}
            seguidores={true}
            siguiendo={false}
            userId={respuestaGuardada?._id ?? ''}
          />
        )}
        {showFollowing && (
          <CardArtistList
            todos={false}
            seguidores={false}
            siguiendo={true}
            userId={respuestaGuardada?._id ?? ''}
          />
        )}
      </section>
    </div>
  );
};

export default FollowButtonArtist;
