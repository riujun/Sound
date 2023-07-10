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
        <div className="flex flex-col flex-grow">
          <Buscador />
          <div className="h-px my-10 mr-3 bg-black"></div>
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
