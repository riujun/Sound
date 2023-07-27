/* eslint-disable prettier/prettier */

import HeaderGlobal from '../components/header-global/Header_Global';
import Markedplace from '../components/markedplace/Markedplace';
import Menu from '../components/menu/Menu';
import Perfiluser from '../components/perfilUser/Perfiluser';
import Tufanbase from '../components/Tufanbase/Tufanbase';

export default function Page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex ">
        <Menu />
        <div className="w-full">
          <Perfiluser />
          <Markedplace />
          {/* <Albums /> falta */}
          <Tufanbase />
        </div>
      </div>
    </div>
  );
}
