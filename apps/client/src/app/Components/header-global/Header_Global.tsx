/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FiBell, FiUpload, FiUser } from 'react-icons/fi';

import logo from '@/app/assets/landingpage/soundwave.png';
export default function HeaderGlobal() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <header className=" border-b-2 border-gray-400 ">
        <nav>
          <div className="items-center justify-between px-4  pt-5 md:flex md:items-center ">
            <div>
              <div className="flex items-center justify-between ">
                <div className="flex">
                  <Image className=" h-[54px] w-[353px]  px-1" src={logo} alt="logo" />{' '}
                </div>
                <div className="md:hidden">
                  <button
                    className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    {navbar ? (
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
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[48px] w-[48px] text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
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
                          <button>Mi musica</button>
                          <button>Mi Perfil SoundWave</button>
                        </div>
                        <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>SoundWave Maeketplace</button>
                          <button>SoundWave Social</button>
                          <button>SoundWave Connect</button>
                        </div>
                        <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>Mis Datos</button>
                          <button>Notificaciones</button>
                          <button>Metodos de Pago</button>
                        </div>
                        <div className="flex h-[80px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>Cerrar Sesión</button>
                        </div>
                      </main>
                    ) : (
                      <div className="flex items-center gap-8 pr-10">
                        <FiBell className="h-[30px] w-[30px] cursor-pointer md:block" />
                        <FiUpload className="h-[30px] w-[30px] cursor-pointer md:block" />
                        <FiUser className="h-[30px] w-[30px] cursor-pointer md:block" />
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
