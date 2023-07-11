'use client';
import Image from 'next/image';
import { useState } from 'react';
// @ts-ignore

export default function CardAlbum({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="m-[10px] inline-flex flex-col items-start justify-start gap-2">
      <Image
        alt="tampa del album"
        className="h-52 w-[206px] rounded-[2.94px]"
        src="https://via.placeholder.com/206x208"
        width="206"
        height="208"
      />
      <div className="relative h-[49px] w-[206px]">
        <div className="absolute left-0 top-[27px] w-[138px] text-xl font-medium text-neutral-500">
          Nombre Álbum
        </div>
        <div className="absolute left-0 top-0 w-[178px] text-2xl font-semibold text-zinc-700">
          Nombre Artista
        </div>
      </div>
      <div className="inline-flex cursor-pointer items-center justify-center gap-2.5 self-stretch border border-zinc-700 px-5 py-2">
        <div className="text-center text-xs font-medium leading-[13.46px] text-zinc-700">
          $ {index + 1}0.00
        </div>
      </div>
    </div>
  );
}
