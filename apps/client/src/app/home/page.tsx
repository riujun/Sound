import React from 'react';

import Buscador from '@/app/components/Buscador/Buscador';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Top from '@/app/components/top10/Topdies';
import { useStore } from '@/app/store';

import Menu from '../components/menu/Menu';

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

          {/* <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae suscipit,
            aspernatur voluptatem beatae id possimus aliquid nostrum, dolor mollitia placeat a et
            inventore totam. Aliquid voluptatem maxime iusto in.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Corrupti repudiandae suscipit, aspernatur voluptatem
            beatae id possimus aliquid nostrum, dolor mollitia placeat a et inventore totam. Aliquid
            voluptatem maxime iusto in.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Corrupti repudiandae suscipit, aspernatur voluptatem beatae id possimus aliquid nostrum,
            dolor mollitia placeat a et inventore totam. Aliquid voluptatem maxime iusto in.
          </article> */}
        </div>
      </div>
    </>
  );
}

export default home;
