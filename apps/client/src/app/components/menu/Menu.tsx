'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Menu() {
  const pathName = usePathname();
  const router = useRouter();
  const isCurrentPage = (pathname: string) => pathname === pathName;

  return (
    <nav className="hidden min-h-[90vh] w-[260px] min-w-[260px] gap-6 border-r-4 border-r-orange-500 bg-orange-200 py-12 md:block lg:min-w-[260px] 2xl:min-h-[100vh]">
      <div className="w-full">
        <button
          className={`min-w-full pb-4 pl-[20%] pt-4 text-left ${
            isCurrentPage('/mymusic') ? 'bg-orange-300' : 'hover:bg-orange-300'
          }`}
          onClick={() => {
            router.push('/mymusic');
          }}
        >
          Mi música
        </button>
        <button
          className={`min-w-full pb-4 pl-[20%] pt-4 text-left ${
            isCurrentPage('/myprofile') ? 'bg-orange-300' : 'hover:bg-orange-300'
          }`}
          onClick={() => {
            router.push('/myprofile');
          }}
        >
          Mi perfil SoundWave
        </button>
      </div>
      <div className="w-full border-t border-black"></div>
      <div>
        <button
          className={`min-w-full pb-4 pl-[20%] pt-4 text-left ${
            isCurrentPage('/home') ? 'bg-orange-300' : 'hover:bg-orange-300'
          }`}
          onClick={() => {
            router.push('/home');
          }}
        >
          SoundWave Marketplace
        </button>
        <button
          className={`min-w-full pb-4 pl-[20%] pt-4 text-left ${
            isCurrentPage('/social') ? 'bg-orange-300' : 'hover:bg-orange-300'
          }`}
          onClick={() => {
            router.push('/social');
          }}
        >
          SoundWave Social
        </button>
      </div>
    </nav>
  );
}
