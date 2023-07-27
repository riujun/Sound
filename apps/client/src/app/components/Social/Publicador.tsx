/* eslint-disable prettier/prettier */
'use client';
import React, { useEffect, useState } from 'react';

import { useDataUser } from '@/app/components/Auth/hooks/dataUser';

interface Song {
  _id: string;
  name: string;
  duration: number;
  user: string;
  coArtist: string;
  price: number;
  genre: string;
  image: string;
  date: string;
  album: string;
  src: string;
  __v: number;
}
interface Cancion {
  _id: string;
  name: string;
}

interface Publicacion {
  user: string;
  contenido: string;
  cancionSeleccionada: string;
}

export default function Buscador() {
  const [datosPublicacion, setDatosPublicacion] = useState<Publicacion>({
    user: '',
    contenido: '',
    cancionSeleccionada: '',
  });
  const userData = useDataUser();
  const userID = userData?._id ?? '';

  const [canciones, setCanciones] = useState<Cancion[]>([]);
  console.log(canciones);
  console.log(datosPublicacion);

  // Simulación: Obtener las canciones disponibles del servidor

  useEffect(() => {
    const url = `http://localhost:4000/user/mysongsuploaded/64c01b43ffa500e4b825dbb5`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData: { songs: Song[][] }) => {
        const flattenedSongs = responseData.songs.flat();
        setCanciones(flattenedSongs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/publications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userID,
          content: datosPublicacion.contenido,
          song: datosPublicacion.cancionSeleccionada,
        }),
      });

      if (response.ok) {
        console.log('Publicación creada exitosamente');
      } else {
        console.log('Error al crear la publicación');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDatosPublicacion((datosPrevios: Publicacion) => ({ ...datosPrevios, [name]: value }));
  };

  return (
    <div className="m-4 w-[92%] items-center md:m-8 md:w-[95%]">
      <div className="flex h-12   border-gray-500 bg-white focus-within:shadow-lg">
        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            className="peer w-[100%] rounded-full border pr-2 text-sm text-gray-600 outline-none"
            id="search"
            placeholder="¿Qué quieres compartir hoy?"
            name="contenido"
            value={datosPublicacion.contenido}
            onChange={handleChange}
          />
          <select
            name="cancionSeleccionada"
            value={datosPublicacion.cancionSeleccionada}
            onChange={handleChange}
          >
            <option value="">-- Seleccione una canción --</option>
            {/* Agrega una verificación antes de utilizar el método map */}
            {canciones.map((cancion) => (
              <option key={cancion._id} value={cancion._id}>
                {cancion.name}
              </option>
            ))}
          </select>
          <button className="ml-5 rounded-lg border-2 p-2" type="submit">
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
}
