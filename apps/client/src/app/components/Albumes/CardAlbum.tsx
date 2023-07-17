'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
CardAlbum.propTypes = {
  index: PropTypes.number.isRequired,
};

export default function CardAlbum({ index }: { index: number }) {
  return (
    <div className="m-[1%] inline-flex flex-col items-start justify-start gap-2">
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
          $ {Number(index) !== 0 && !isNaN(Number(index)) ? Number(index) + 1 : 1}0.00
        </div>
      </div>
    </div>
  );
}
