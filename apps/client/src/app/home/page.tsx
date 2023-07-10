import React from 'react';

import Buscador from '@/app/components/Buscador/Buscador';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Top from '@/app/components/top10/Topdies';

import Menu from '../components/menu/Menu';

function home() {
  return (
    <>
      <HeaderGlobal />
      <div className="flex gap-4">
        <Menu />
        <div className="flex flex-grow flex-col">
          <Buscador />
          <div className="my-10 mr-3 h-px bg-black"></div>
          <Top />
        </div>
      </div>
    </>
  );
}

export default home;
