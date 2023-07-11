import React from 'react';

import Buscador from '@/app/components/Buscador/Buscador';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Top from '@/app/components/top10/Topdies';
import Albumes from '@/app/components/Albumes/Albumes';

import Menu from '../components/menu/Menu';

function home() {
  return (
    <>
      <HeaderGlobal />
      <div className="flex gap-4">
        <Menu />
        <div className="flex flex-col flex-grow">
          <Buscador />
          <div className="h-px my-10 mr-3 bg-black"></div>
          <Top />
          <Albumes />
        </div>
      </div>
    </>
  );
}

export default home;
