// VerPublicaciones.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface Usuario {
  profilePhoto: string;
  name: string;
}
interface ResponseData {
  data: Publicacion[];
}
interface Cancion {
  _id: string;
  name: string;
  genre: string;
  album: string;
  image: string;
}

interface Publicacion {
  _id: string;
  user: Usuario[];
  content: string;
  song: Cancion;
  data?: Publicacion[]; // Agregamos la propiedad data como opcional
}

const VerPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const respuesta = await fetch('http://localhost:4000/publications');
        const datos = (await respuesta.json()) as ResponseData;
        console.log(datos);

        // Aquí aseguramos que datos sea un array antes de asignarlo a publicaciones
        if (Array.isArray(datos.data)) {
          setPublicaciones(datos.data);
        } else {
          console.error('La respuesta del servidor no es un array:', datos);
        }
      } catch (error) {
        console.error('Error al obtener las publicaciones', error);
      }
    };
    void obtenerPublicaciones();
  }, []);

  return (
    <div className="m-10">
      <h1 className="mb-4 text-2xl font-semibold">Publicaciones</h1>
      {/* Verificamos si publicaciones es un array antes de usar map */}
      {Array.isArray(publicaciones) &&
        publicaciones.map((publicacion: Publicacion) => (
          <div key={publicacion._id} className="mb-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <img className="h-14 w-14 rounded-full" src={publicacion.user[0].profilePhoto} />
              <div className="flex flex-col gap-1">
                <div className="text-xl font-normal leading-tight">{publicacion.user[0].name}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xl font-normal leading-normal text-zinc-700">
                {publicacion.content}
              </div>
              <div className="flex gap-2">{/* Aquí puedes agregar más elementos */}</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-4 rounded-2xl border border-orange-500 bg-orange-50 p-8">
                <img className="w-44 self-stretch rounded-sm" src={publicacion.song.image} />
                <div className="flex flex-grow flex-col gap-6">
                  <div className="relative h-[185px]">
                    <div className="absolute left-0 top-[84px] flex flex-col gap-2">
                      {/* <div className="text-sm font-semibold">1.2k Seguidores</div> */}
                      <div className="h-[0px] w-[365px] border border-zinc-700"></div>
                    </div>
                    <div className="absolute left-0 top-0 flex flex-col gap-2">
                      <div className="h-11 w-[228px]">
                        <span className="text-xl font-semibold">{publicacion.song.name}</span>
                        <br />
                        <span className="text-xl font-normal">{publicacion.song.album}</span>
                      </div>
                      <div className="h-4 w-[228px] text-sm font-medium text-gray-500">
                        {publicacion.song.genre}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VerPublicaciones;
