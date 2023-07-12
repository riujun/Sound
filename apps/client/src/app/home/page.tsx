import React from 'react';

import Albumes from '@/app/components/Albumes/Albumes';
import Buscador from '@/app/components/Buscador/Buscador';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import Top from '@/app/components/top10/Topdies';
import { useStore } from '@/app/store';

function home() {
  console.log(useStore.getState().name);
  return (
    <>
      <HeaderGlobal />
      <div className="flex gap-4">
        <Menu />
        <div className="flex flex-grow flex-col">
          <Buscador />
          <div className="my-10 mr-3 h-px bg-black"></div>
          <Top />
          <Albumes />
        </div>
      </div>
    </>
  );
}

export default home;
