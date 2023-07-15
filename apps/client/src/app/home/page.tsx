import Albumes from '@/app/components/Albumes/Albumes';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import Top from '@/app/components/top10/Topdies';
import { useStore } from '@/app/store';
import CardArtistList from '../components/CadrArtistList/CardArtistList';

function home() {
  console.log(useStore.getState().name);
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-col justify-center flex-grow">
          <CardArtistList pageSize={10} />
          <div className="h-px my-10 mr-3 bg-black"></div>
          <Top />
          <Albumes />
          <div className="ml-7 mb-3  text-[11px]">© 2023 SoundWave | Todos los Derechos Reservados</div>
        </div>
      </div>
    </>
  );
}

export default home;
