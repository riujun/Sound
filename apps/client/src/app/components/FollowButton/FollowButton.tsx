/* eslint-disable prettier/prettier */
'use client';
import React, { useState } from 'react';

import CardArtistList from '../CadrArtistList/CardArtistList';
// import CardArtist from '../CadrArtistList/CardArtist';

const FollowButton: React.FC = () => {
  const [showFollowers, setShowFollowers] = useState(true);
  const [showFollowing, setShowFollowing] = useState(false);

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
    setShowFollowing(false);
  };

  const toggleFollowing = () => {
    setShowFollowing(!showFollowing);
    setShowFollowers(false);
  };

  return (
    <div className="mt-16">
      <nav className="flex items-center justify-center">
        <div className="bouder border-orange-400g- orange-300 flex h-[48px] w-[361px] items-center justify-center gap-10  rounded-lg  border-[3px] border-orange-500 bg-orange-300 text-center text-lg font-semibold text-black">
          <div className="ml-3 ">
            <button
              className={
                showFollowers ? 'rounded-[7px] bg-white px-10 py-[3px]  ' : 'px-10 py-[3px]'
              }
              onClick={toggleFollowers}
            >
              Siguiendo
            </button>
          </div>
          <div className="mr-3">
            <button
              className={showFollowing ? 'rounded-[7px] bg-white px-10 py-[3px]' : 'px-10 py-[3px]'}
              onClick={toggleFollowing}
            >
              Seguidores
            </button>
          </div>
        </div>
      </nav>
      <section>
        {showFollowers && <CardArtistList todos={false} siguiendo={false} seguidores={true} />}
        {showFollowing && <CardArtistList todos={false} siguiendo={true} seguidores={false} />}
      </section>
    </div>
  );
};

export default FollowButton;
