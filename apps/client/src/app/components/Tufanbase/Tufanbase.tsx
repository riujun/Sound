/* eslint-disable prettier/prettier */
'use client';
import FollowButton from '../FollowButton/FollowButton';

export default function Tufanbase() {
  return (
    <div className="mt-10">
      <div>
        <h2 className="pl-5 text-[32px] text-orange-500">Tu fan base</h2>
        <div className="border-greey-100 ml-5 flex  w-[98%]  items-center justify-center border-[2px] "></div>
      </div>
      <section>
        <FollowButton />
      </section>
    </div>
  );
}
