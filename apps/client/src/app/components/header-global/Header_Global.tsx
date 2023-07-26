'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import bell from '@/app/assets/bell.png';
import dw from '@/app/assets/dw.png';
import opciones from '@/app/assets/Flecha.png';
import logo from '@/app/assets/landingpage/soundwave.png';
import dataUsuario from '@/app/components/hook/DataUser';
import MenuOptions from '@/app/components/ModalAlerts/AlertMenuOptions';

export default function HeaderGlobal() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const userData = dataUsuario();

  const handleClose = () => {
    setIsOpen(false);
    setShowMyModal(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowMyModal(true);
  };

  return (
    <div>
      {userData != null && (
        <header className="w-full border-b-2 border-gray-400">
          <nav>
            <div className="items-center justify-between px-4 pb-1 pt-3 md:flex md:items-center">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <Image src={logo} alt="logo" />
                  </div>
                  <div className="md:hidden">
                    <button
                      className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
                      onClick={() => {
                        setNavbar(!navbar);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[48px] w-[48px] text-orange-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                    navbar ? 'block' : 'hidden'
                  }`}
                >
                  <nav>
                    <div className={`flex ${navbar ? 'md:hidden' : 'md:flex'}`}>
                      {navbar ? (
                        <main className="flex flex-col items-start">
                          <div className="flex h-[110px] w-screen flex-col items-start justify-evenly border-b-2 border-t-2 border-gray-400">
                            <Link href={'/mymusic'}>
                              {' '}
                              <button>Mi musica</button>
                            </Link>
                            <Link href={'/Perfilartist'}>
                              <button>Mi Perfil SoundWave</button>
                            </Link>
                          </div>
                          <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                            <Link href={'/home'}>
                              {' '}
                              <button>SoundWave Maeketplace</button>
                            </Link>
                            <Link href={'/Mydata'}>
                              {' '}
                              <button>SoundWave Social</button>
                            </Link>
                          </div>
                          <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                            <Link href={'/Mydata'}>
                              <button>Mis Datos</button>
                            </Link>
                            <Link href={'/Mydata'}>
                              <button>Metodos de Pago</button>
                            </Link>
                          </div>
                          <div className="flex h-[80px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                            <Link href={'/'}>
                              <button>Cerrar Sesión</button>
                            </Link>
                          </div>
                        </main>
                      ) : (
                        <div className="flex items-center gap-8 pr-10">
                          <Image src={dw} alt="descarga" className="cursor-pointer md:block" />
                          <Image src={bell} alt="campana" className="cursor-pointer md:block" />
                          <div className="relative">
                            <div onClick={toggleMenu} className="flex cursor-pointer items-center">
                              <div className="relative  w-[60px]">
                                <Image
                                  src={userData.profilePhoto}
                                  alt="user"
                                  className="h-[50px] w-[50px] rounded-[100%] border-[2px] border-orange-300 text-white md:block"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <div className="relative h-[18px] ">
                                <Image src={opciones} alt="opciones" />
                              </div>
                            </div>
                            {isOpen && <MenuOptions onClose={handleClose} visible={showMyModal} />}
                          </div>
                        </div>
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
}
