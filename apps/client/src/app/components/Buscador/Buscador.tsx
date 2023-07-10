import Image from 'next/image';
import CardArtist from './CardArtist';
import logoMarketPlace from '@/app/assets/homePage/logoMarketPlace.png';

export default function Buscador() {

  const renderCardArtists = () => {
    const cardArtists = [];
    for (let i = 0; i < 10; i++) {
      cardArtists.push(<CardArtist key={i} />);
    }
    return cardArtists;
  };
  
  return (
    <div className="flex-grow my-5 mr-3 overflow-auto">
      <div className="flex justify-between">
        <Image className="hidden w-auto md:block" src={logoMarketPlace} alt="logo market place" />
        <div className="items-center md:w-[50%] w-[100%]">
          <div className="relative flex h-12 overflow-auto bg-white border border-gray-500 rounded-full focus-within:shadow-lg">
            <div className="grid w-12 h-full text-gray-600 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="w-[100%] border-none pr-2 text-sm text-gray-600 outline-none  peer"
              type="text"
              id="search"
              placeholder="¿Qué quieres escuchar hoy?"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <div className="text-[18px] font-semibold leading-normal text-zinc-700 lg:text-[24px]">
          Descubre y apoya a nuevo talento musical
        </div>
      </div>
      {renderCardArtists()}
    </div>
  );
}
