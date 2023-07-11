'use client';
import Image from 'next/image';
import CardArtist from './CardArtist';
import logoMarketPlace from '@/app/assets/homePage/logoMarketPlace.png';
import { useState } from 'react';

export default function Buscador() {
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Número de registros por página
  const pageSize = 10;
  const totalItems = 95;
  // Cálculo del número total de páginas
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const maxVisiblePages = 5;

  // Función para renderizar los componentes CardArtist correspondientes a la página actual
  const renderCardArtists = () => {
    // Cálculo del índice de inicio y fin de los registros de la página actual
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const cardArtists = [];

    for (let i = startIndex; i < endIndex; i++) {
      cardArtists.push(<CardArtist key={i} index={i} />);
    }
    return cardArtists;
  };

  const generatePageNumbers = () => {
    let startPage: number;
    let endPage: number;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.ceil(maxVisiblePages / 2) - 1;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }).map((_, index) => startPage + index);
  };

  // Comprobación de si existe una página anterior o siguiente
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  // Función para manejar el evento de hacer clic en el botón de página anterior
  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para manejar el evento de hacer clic en el botón de página siguiente
  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex-grow my-5 mr-3 overflow-auto">
      <div className="flex justify-between">
        <Image className="hidden w-auto md:block" src={logoMarketPlace} alt="logo market place" />
        <div className="w-[100%] items-center md:w-[50%]">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer w-[100%] border-none pr-2 text-sm text-gray-600  outline-none"
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
      {/* Renderización de los componentes CardArtist correspondientes a la página actual */}
      {renderCardArtists()}
      <div id="Paginador" className="flex justify-center pt-8">
        <div className="inline-flex gap-2 bg-white">
          {/* Botón de página anterior */}
          <div
            id="anterior"
            className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
              hasPreviousPage ? 'border-orange-500 p-[5px]' : 'border-neutral-400'
            } ${hasPreviousPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={handlePreviousPage}
          >
            <div className="text-base font-semibold leading-none text-black uppercase">&lt;</div>
          </div>
          {/* Renderización de los números de página */}
          {generatePageNumbers().map((pageNumber) => (
            <div
              key={pageNumber}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
                currentPage === pageNumber
                  ? 'border-orange-600 bg-orange-300'
                  : 'border-orange-500 p-[5px]'
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              <div className="text-base font-semibold leading-none text-black uppercase">
                {pageNumber}
              </div>
            </div>
          ))}
          {/* Botón de página siguiente */}
          <div
            className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
              hasNextPage ? 'border-orange-500 p-[5px]' : 'border-neutral-400'
            } ${hasNextPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={handleNextPage}
          >
            <div className="text-base font-semibold leading-none text-black uppercase">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
