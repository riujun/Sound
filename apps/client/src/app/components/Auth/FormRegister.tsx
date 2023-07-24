/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Se ha desactivado el eslint de tipos porque me lansaba error el staticImages de nextjs
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import hideEye from '@/app/assets/auth/hide-eye.svg';
import showEye from '@/app/assets/auth/show-eye.svg';
import logo from '@/app/assets/landingpage/soundwave.png';

interface FormState {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
}

export default function FormRegister() {
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState<FormState>({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  });

  const { field1, field2, field3, field4, field5, field6 } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isFormCompleted =
    field1 !== '' &&
    field2 !== '' &&
    field3 !== '' &&
    field4 !== '' &&
    field5 !== '' &&
    field6 !== '';

  return (
    <>
      <section className="z-10 max-h-screen md:relative md:z-10 md:mt-[129px] md:min-h-[889px] md:w-[588px] md:rounded-xl md:bg-orange-100 md:px-[120px] md:pt-[59px] md:shadow-2xl">
        <Image src={logo} alt="Logo" width={348} height={53} priority className="hidden md:flex" />
        <p className="mt-10 px-7 text-start text-2xl font-bold text-black md:mt-5  md:pt-[25px] md:text-center md:text-[24px] md:font-semibold ">
          ¡Regístrate ahora y sumérgete en el mundo de la música!
        </p>
        <form className="mt-10 px-5 md:mt-[46px] md:px-0 ">
          <div className="relative mb-4 md:mb-4">
            <input
              type="text"
              name="field1"
              value={field1}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Nombre Completo
            </label>
          </div>

          <div className="relative mb-4 md:mb-4">
            <input
              type="text"
              name="field2"
              value={field2}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Fecha de nacimiento
            </label>
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              type="email"
              name="field3"
              value={field3}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Correo electrónico
            </label>
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              type="email"
              name="field4"
              value={field4}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Repetir correo electrónico
            </label>
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              type={visible ? 'text' : 'password'}
              name="field5"
              value={field5}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Contraseña
            </label>
            {visible ? (
              <Image
                src={showEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => {
                  setVisible(false);
                }}
              />
            ) : (
              <Image
                src={hideEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => {
                  setVisible(true);
                }}
              />
            )}
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              type={visible ? 'text' : 'password'}
              name="field6"
              value={field6}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Repetir contraseña
            </label>
            {visible ? (
              <Image
                src={showEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => {
                  setVisible(false);
                }}
              />
            ) : (
              <Image
                src={hideEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => {
                  setVisible(true);
                }}
              />
            )}
          </div>
          <button
            className={`inline-flex h-12 w-[348px] items-center justify-center gap-2.5 rounded-md p-4 text-[16px] font-semibold uppercase leading-none   ${
              isFormCompleted
                ? 'bg-orange-500 text-black hover:bg-orange-400'
                : ' bg-zinc-300 text-neutral-400'
            }`}
            type="submit"
            disabled={!isFormCompleted}
          >
            Continuar
          </button>
        </form>
        <Link
          href={'/login'}
          className=" md:mt-[35 px] mt-10 flex justify-center hover:underline hover:decoration-1 "
        >
          Si ya tenés cuenta, inicia sesión aquí
        </Link>
      </section>
    </>
  );
}
