/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { FiCamera, FiEdit3 } from 'react-icons/fi';

import mp from '@/app/assets/pagos/Mercado Pago.png';
import paypal from '@/app/assets/pagos/Pay Pal.png';

import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';
import { ButtonTres } from '../mobile/buttons/Button_tres';
interface UserData {
  name: string;
  surname: string;
  username: string;
  artist: boolean;
  email: string;
  password: string;
  genre: string;
  description: string;
  paypalApproved: boolean;
  mercadopagoApproved: boolean;
  profilePhoto: string;
  createdAt: string;
}

export default function Midata() {
  const router = useRouter();
  const originalUserData: UserData = {
    name: '',
    surname: '',
    username: '',
    artist: false,
    email: '',
    password: '',
    genre: '',
    description: '',
    paypalApproved: false,
    mercadopagoApproved: false,
    profilePhoto: '',
    createdAt: '',
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<UserData>(originalUserData);

  useEffect(() => {
    fetch(`http://localhost:4000/user/64c01b43ffa500e4b825dbb5`)
      .then((response) => response.json())
      .then((data: UserData) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file != null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          profilePhoto: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    fetch('http://localhost:4000/user/64c01b43ffa500e4b825dbb5', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data: UserData) => {
        router.push('/Perfilartist');
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const { checked } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [key]: checked,
    }));
  };
  return (
    <div className=" mb-20 w-full">
      <h2 className="ml-7  mt-10 text-[32px] font-medium leading-normal text-orange-500">
        Mis datos
      </h2>
      <section className=" mt-10 flex w-[100%] flex-col items-center justify-center  ">
        <div className="">
          <div className="flex w-full justify-between px-5">
            <h3 className="text-2xl font-semibold leading-normal text-black">Información básica</h3>
            <div>
              <div className="flex items-center text-center text-lg font-normal leading-[48px] text-black">
                Editar <FiEdit3 />
              </div>
            </div>
          </div>
          <div className="h-[0px]  w-[100%] border border-gray-400 "></div>
          <section className="flex flex-col items-center md:flex-row md:justify-evenly">
            <div className="mx-14 my-10 ">
              <div className="text-[21px] font-medium leading-normal text-black">
                Foto de perfil
              </div>

              <div>
                <div className="relative h-[110px] w-[110px]">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  <div
                    className="cursor-pointer rounded-[50px] object-cover"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Image src={userData.profilePhoto} alt="perfil" width={120} height={120} />
                  </div>
                  <div className="relative bottom-[15px] left-[80px] text-[20px]">
                    <FiCamera />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10">
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">Nombre</div>
                <input
                  type="text"
                  name="name"
                  placeholder="Craig Álvarez"
                  className="mr-20 w-[40%] border-none"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">
                  Fecha de nacimiento
                </div>
                <input
                  type="text"
                  name="surname"
                  placeholder="04 de febrero 1880"
                  className="mr-20 w-[40%] border-none"
                  value={userData.createdAt}
                  onChange={handleChange}
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">
                  Correo electrónico
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="vcraig_alvarez@gmail.com"
                  className="mr-20 w-[40%] border-none"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex items-center justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">Contraseña</div>
                <input
                  type="password"
                  name="password"
                  placeholder="******************"
                  className="mr-20 w-[40%] border-none"
                />
                <div>
                  <Link href={'/PassportC'}>
                    <div className="flex items-center text-center text-lg font-normal leading-[48px] text-black">
                      Cambiar <FiEdit3 />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
            </div>
          </section>
          <h2 className=" pl-5 text-2xl font-semibold leading-normal text-black ">
            Método de cobro
          </h2>
          <div className=" mt-2 h-[0px] w-[100%] border border-gray-400 "></div>
          <p className="mt-3 w-full pl-5 text-[21px] font-medium leading-normal text-black">
            Configura tu método de cobro. Una vez que esté configurado, podrás recibir los pagos por
            tus ventas.
          </p>
          <section className="mb-20 mt-20 flex justify-around">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="paypalApproved"
                id="paypalCheckbox"
                checked={userData.paypalApproved}
                onChange={(e) => {
                  handleCheckboxChange(e, 'paypalApproved');
                }}
              />
              <Image src={paypal} alt="paypal" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="mercadopagoApproved"
                  id="mercadopagoCheckbox"
                  checked={userData.mercadopagoApproved}
                  onChange={(e) => {
                    handleCheckboxChange(e, 'mercadopagoApproved');
                  }}
                />
                <Image src={mp} alt="paypal " />
              </div>
            </div>
          </section>
          <h2 className=" pl-5 text-2xl font-semibold leading-normal text-black">
            Información del artista
          </h2>
          <div className="mt-2  h-[0px] w-[100%] border  border-gray-400"></div>
          <div className="my-5 pl-5">
            <input
              type="text"
              name="genre"
              className="w-[40%]  rounded border-[1px]  "
              placeholder="Escribe el género musical"
              value={userData.genre}
              onChange={handleChange}
            />
          </div>
          <div className="my-5 pl-5">
            <input
              type="text"
              name="description"
              className="w-[90%] rounded border border-neutral-400 pb-[20%]"
              placeholder="Escribe una breve descripción acerca del artista"
              value={userData.description}
              onChange={handleChange}
            />
          </div>
          <div className="hidden  md:block">
            <div className="mt-10 flex  justify-end gap-5 pr-5 ">
              <div className="inline-flex h-12 w-[141px] items-center justify-center gap-2.5 border border-orange-500 p-4 hover:bg-orange-100">
                <Link href={'/Perfilartist'}>
                  <div className="shrink grow basis-0 text-center  text-base font-semibold uppercase leading-none text-black">
                    Cancelar
                  </div>
                </Link>
              </div>
              <div className="inline-flex h-12   w-[158px] items-center justify-center gap-2.5 bg-orange-500 p-4 hover:bg-orange-400">
                <div
                  onClick={handleSubmit}
                  className="shrink grow basis-0 cursor-pointer text-center text-base font-semibold uppercase leading-none text-black"
                >
                  Guardar cambios
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center  justify-center gap-5 md:hidden">
              <ButtonCuatro onClick={handleSubmit}>Guardar cambios</ButtonCuatro>

              <Link href={'/Perfilartist'}>
                <ButtonTres>Cancelar</ButtonTres>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
