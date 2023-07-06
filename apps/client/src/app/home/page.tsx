/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';

import Buscador from '@/app/Components/Buscador/Buscador';
import HeaderGlobal from '@/app/Components/header-global/Header_Global';
import Top from '@/app/Components/top10/Topdies';

import Menu from '../Components/menu/Menu';

function home() {
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <section className="p-5">
          <Buscador />
          <div className="m-10 h-px bg-black"></div>
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
        </section>
      </div>
    </>
  );
}

export default home;
