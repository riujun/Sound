'use client';
import Image from 'next/image';
import { useState } from 'react';

import logoMarketPlace from '@/app/assets/homePage/logoMarketPlace.png';

import Buscador from '../Buscador/Buscador';
import CardArtist from './CardArtist';

interface CardArtistListProps {
  pageSize?: number;
}

export default function CardArtistList({ pageSize = 0 }: CardArtistListProps) {
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Número de registros por página
  const totalItems = 95; // cantidad de CardArtists que traiga la API
  // Cálculo del número total de páginas
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const totalPages = Math.ceil(totalItems / pageSize) || 1; // Cantidad de páginas del paginador
  const maxVisiblePages = 5; // Maximo de páginas visibles en el paginador

  // Función para renderizar los componentes CardArtist correspondientes a la página actual
  const renderCardArtists = () => {
    // Cálculo del índice de inicio y fin de los registros de la página actual
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const cardArtists = [];

    for (let i = startIndex; i < endIndex; i++) {
      // Pasar parámetros con los datos del Artista
      cardArtists.push(<CardArtist key={i} index={i} />);
    }
    return cardArtists;
  };

  const generatePageNumbers = () => {
    let startPage: number;
    let endPage: number;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
    <div className="m-[1%] flex-grow overflow-auto">
      <div className="flex justify-between">
        <div className="hidden w-auto md:block">
          <Image className="" src={logoMarketPlace} alt="logo market place" />
        </div>
        <Buscador />
      </div>
      <div className="flex justify-center p-5">
        <div className="text-[18px] font-semibold leading-normal text-zinc-700 lg:text-[24px]">
          Descubre y apoya a nuevo talento musical
        </div>
      </div>
      {/* Renderización de los componentes CardArtist correspondientes a la página actual */}
      <div>{renderCardArtists()}</div>
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
            <div className="text-base font-semibold uppercase leading-none text-black">&lt;</div>
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
              onClick={() => {
                setCurrentPage(pageNumber);
              }}
            >
              <div className="text-base font-semibold uppercase leading-none text-black">
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
            <div className="text-base font-semibold uppercase leading-none text-black">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
