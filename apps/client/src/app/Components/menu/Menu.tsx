export default function Menu() {
  return (
      <nav className="hidden md:block min-w-[145px] lg:min-w-[267px] min-h-[90vh] gap-6 border-r-4 border-r-orange-500 bg-orange-200 py-12">
        <div className="w-full">
          <button className="min-w-full pb-4 pl-[15%] pt-4 text-left hover:bg-orange-300">
            Mi música
          </button>
          <button className="min-w-full pb-4 pl-[15%] pt-4 text-left hover:bg-orange-300">
            Mi perfil SoundWave
          </button>
        </div>
        <div className="w-full border-t border-black"></div>
        <div>
          <button className="min-w-full pb-4 pl-[15%] pt-4 text-left hover:bg-orange-300">
            SoundWave Marketplace
          </button>
          <button className="min-w-full pb-4 pl-[15%] pt-4 text-left hover:bg-orange-300">
            SoundWave Social
          </button>
          <button className="min-w-full pb-4 pl-[15%] pt-4 text-left hover:bg-orange-300">
            SoundWave Connect
          </button>
        </div>
      </nav>
  );
}
