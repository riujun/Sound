'use client';
import Image from 'next/image';
import { useState } from 'react';
// @ts-ignore

export default function CardArtist() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="m-[11px] inline-flex flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6">
      <div className="inline-flex items-center self-stretch justify-between gap-2">
        <Image
          alt="imagen artista"
          className="rounded-full"
          src="https://via.placeholder.com/49x49"
          width="49"
          height="49"
        />

        <div>
          {isHovered ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
            >
              <path
                d="M23.1617 29.6948L23.161 29.6942C21.0905 27.9609 19.4141 26.5546 18.2494 25.2391C17.0885 23.928 16.5 22.7763 16.5 21.562C16.5 19.5935 18.1732 18 20.4 18C21.6551 18 22.8578 18.5419 23.6338 19.3766L24 19.7705L24.3662 19.3766C25.1422 18.5419 26.3449 18 27.6 18C29.8268 18 31.5 19.5935 31.5 21.562C31.5 22.7763 30.9115 23.928 29.7506 25.2391C28.5859 26.5546 26.9095 27.9609 24.839 29.6942L24.8383 29.6948L24 30.3993L23.1617 29.6948Z"
                fill="#FF6702"
                stroke="#FF6702"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              stroke="black"
            >
              <path d="M23.1617 29.6948L23.161 29.6942C21.0905 27.9609 19.4141 26.5546 18.2494 25.2391C17.0885 23.928 16.5 22.7763 16.5 21.562C16.5 19.5935 18.1732 18 20.4 18C21.6551 18 22.8578 18.5419 23.6338 19.3766L24 19.7705L24.3662 19.3766C25.1422 18.5419 26.3449 18 27.6 18C29.8268 18 31.5 19.5935 31.5 21.562C31.5 22.7763 30.9115 23.928 29.7506 25.2391C28.5859 26.5546 26.9095 27.9609 24.839 29.6942L24.8383 29.6948L24 30.3993L23.1617 29.6948Z" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="text-[16px] font-semibold leading-tight text-zinc-700">Nombre</div>
        <div className="text-[11px] font-medium text-neutral-500">Género</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
          Cant. Seguidores
        </div>
        <div className="h-px w-[171px] bg-black"></div>
      </div>
      <div className="h-[56px] w-[171px] overflow-hidden text-[10px] font-normal leading-[14px] text-zinc-700">
        <p className="m-0 line-clamp-4">
          Breve descripción del artista Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium deleniti officia perferendis vel reprehenderit nisi laboriosam facere
          voluptates tenetur eligendi, alias deserunt odio beatae eveniet expedita atque aspernatur
          voluptatem facilis.
        </p>
      </div>
    </div>
  );
}
