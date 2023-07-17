/* eslint-disable prettier/prettier */
import React from 'react';

export default function PassportUser() {
  return (
    <div className=" w-screen">
      <h2 className="ml-10 mt-16 text-[32px] font-medium leading-normal text-orange-500">
        Mis datos{' '}
      </h2>
      <div className=" flex flex-col items-center justify-center">
        <div className="mt-10">
          <h3 className="text-2xl font-semibold leading-normal text-black">Cambiar contraseña</h3>
          <div className="h-[0px] w-[746px] border border-black"></div>
          <section className="mt-20 flex flex-col gap-5">
            <input type="text" className="w-[100%]  rounded" placeholder="Contraseña actual" />
            <input type="text" className="w-[100%] rounded " placeholder="Contraseña actual" />
            <input type="text" className="w-[100%] rounded " placeholder="Contraseña actual" />
            <div className="flex justify-end gap-5">
              <div className="inline-flex h-12 w-[141px] items-center justify-center gap-2.5 border border-orange-500 p-4">
                <div className="shrink grow basis-0 text-center text-base font-semibold uppercase leading-none text-black">
                  Cancelar
                </div>
              </div>
              <div className="inline-flex h-12 w-[186px] items-center justify-center gap-2.5 bg-orange-500 p-4">
                <div className="shrink grow basis-0 text-center text-base font-semibold uppercase leading-none text-black">
                  guardar contraseña
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
