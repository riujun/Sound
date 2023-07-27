'use client';
/* eslint-disable prettier/prettier */
// import { useRouter } from 'next/navigation';

import HeaderGlobal from '../components/header-global/Header_Global';
import MarketplaceArtist from '../components/markedplace/MarketplaceArtist';
import Menu from '../components/menu/Menu';
import ProfileArtist from '../components/ProfileArtist/ProfileArtist';
import TufanbaseArtist from '../components/Tufanbase/TufanbaseArtist';

export default function Page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex ">
        <Menu />
        <div className="w-full">
          <ProfileArtist />
          <MarketplaceArtist />
          {/* <Albums /> falta */}
          <TufanbaseArtist />
        </div>
      </div>
    </div>
  );
}
