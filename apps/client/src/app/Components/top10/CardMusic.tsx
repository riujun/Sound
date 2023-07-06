/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import Image from 'next/image';
import { IoIosMore, IoIosPodium } from 'react-icons/io';
import { TbPlayerPlayFilled, TbPlaystationSquare } from 'react-icons/tb';

import img from '@/app/assets/landingpage/p.jpg';

export default function CardMusic() {
  return (
    <>
      <div className="flex h-[55px] w-[490px] items-center justify-evenly border-b-[1px] border-black">
        <h5>1</h5>
        <div className="flex items-center gap-5">
          <div>
            <Image className="h-[42px] w-[42px]" src={img} alt="img" />
          </div>
          <div>
            <p>Ecos del viento</p>
            <p className="text-[14px]">Craig</p>
          </div>
        </div>
        <IoIosPodium className="text-lg" />
        <button className="group relative border px-6 ">
          $34
          <span className="absolute  left-1/2 -translate-x-1/2 transform bg-orange-500 px-2   text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Comprar
          </span>
        </button>
        <div className="rounded-full border border-orange-500 p-1">
          <TbPlayerPlayFilled className="cursor-pointer  text-orange-500" />
        </div>
        <IoIosMore className="cursor-pointer" />
        {/* <TbPlaystationSquare /> */}
      </div>
      <br />
      <div className="flex h-[55px] w-[490px] items-center justify-evenly border-b-[1px] border-black">
        <h5>1</h5>
        <div className="flex items-center gap-5">
          <div>
            <Image className="h-[42px] w-[42px]" src={img} alt="img" />
          </div>
          <div>
            <p>Ecos del viento</p>
            <p className="text-[14px]">Craig</p>
          </div>
        </div>
        <IoIosPodium className="text-lg" />
        <button className="group relative border px-6 ">
          $34
          <span className="absolute  left-1/2 -translate-x-1/2 transform bg-orange-500 px-2   text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Comprar
          </span>
        </button>
        <div className="">
          <TbPlaystationSquare className="cursor-pointer text-3xl text-orange-500" />
        </div>
        <IoIosMore className="cursor-pointer" />
        {/* <TbPlaystationSquare /> */}
      </div>
      <br />
    </>
  );
}
