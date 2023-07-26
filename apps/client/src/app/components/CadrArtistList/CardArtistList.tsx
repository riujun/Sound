'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useDataUser } from '@/app/components/Auth/hooks/dataUser';

import Loader from '../Loader/Loader';
import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';
import type { Artist } from './CardArtist';
import CardArtist from './CardArtist';
interface CardArtistProps {
  todos: boolean;
  seguidores: boolean;
  siguiendo: boolean;
}
export default function CardArtistList({ todos, seguidores, siguiendo }: CardArtistProps) {
  // Estado para almacenar la página actual
  const [artists, setArtists] = useState<Artist[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [showMyModal, setShowMyModal] = useState(true);
  const userData = useDataUser();
  const userID = userData !== null ? userData._id : '';

  useEffect(() => {
    const fetchArtists = async (): Promise<void> => {
      try {
        let response;
        console.log('userid: ', userID);
        if (todos) {
          response = await axios.get<Artist[]>('http://localhost:4000/user');
        } else if (seguidores) {
          response = await axios.get<Artist[]>(`http://localhost:4000/user/seguidores/${userID}`);
        } else if (siguiendo) {
          response = await axios.get<Artist[]>(`http://localhost:4000/user/favoritos/${userID}`);
        } else {
          console.error(
            'Error: Propiedad no válida. Debe proporcionar "todos", "seguidores" o "siguiendo".'
          );
          return;
        }

        // const response = await axios.get<Artist[]>('http://localhost:4000/user');
        setArtists(response.data);
        setShowMyModal(false);
      } catch (error) {
        console.error('Error fetching artist:', error);
        setShowMyModal(false);
      }
    };
    const fetchData = () => {
      fetchArtists().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in fetchArtists:', error);
        setShowMyModal(false);
      });
    };

    fetchData();
  }, []);

  // isDBConnected && hasData ? setShowMyModal(false) : console.log('Conectado y con datos');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMediumScreen(window.innerWidth < 768);
        setShowAll(window.innerWidth > 768);
        pageSize = window.innerWidth > 768 ? 10 : 6;
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };
  // Número de registros por página
  let pageSize = 0;

  if (typeof window !== 'undefined') {
    pageSize = window.innerWidth > 768 ? 10 : 6;
  }
  const totalItems = Array.isArray(artists) ? artists.length : 0;
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
      cardArtists.push(<CardArtist key={i} artist={artists[i]} />);
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
      <Loader visible={showMyModal} />
      {/* Renderización de los componentes CardArtist correspondientes a la página actual */}
      <div
        className={
          isMediumScreen && !showAll
            ? `h-[181px] w-[382px] overflow-x-scroll whitespace-nowrap pl-1 sm:w-[760px]`
            : `pl-6 md:h-[485px] md:w-full md:overflow-x-auto md:whitespace-normal md:pl-3`
        }
      >
        {/* {hasData ? '' : <div className="text-red-600 ">No Data</div>} */}
        {renderCardArtists()}
      </div>
      {showAll ? (
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
      ) : (
        <div className="mt-4 flex justify-center">
          <ButtonCuatro onClick={handleShowMore}>DESCUBRE MÁS</ButtonCuatro>
        </div>
      )}
    </div>
  );
}
