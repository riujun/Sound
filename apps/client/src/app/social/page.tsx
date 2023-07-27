import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import Publicador from '@/app/components/Social/Publicador';
import { useStore } from '@/app/store';

import VerPublicaciones from '../components/publications/VerPublicaciones';
import SocialHeader from '../components/Social/SocialHeader';

function social() {
  console.log(useStore.getState().name);
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col">
          <SocialHeader />
          <Publicador />
          <VerPublicaciones />
          {/* FOOTER */}
          {/* <div className="mb-3 ml-7 text-[11px]">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div> */}
        </div>
      </div>
    </>
  );
}

export default social;
