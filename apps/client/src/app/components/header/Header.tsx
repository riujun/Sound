'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/app/assets/landingpage/soundwave.png';

import { ButtonCreate } from '../desk/Buttons/seccion/Button_Create';
import { ButtonInicio } from '../desk/Buttons/seccion/button_Inicio';

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between px-8 py-8">
        <Image src={logo} alt="Logo" width={353} height={54} priority />
        <nav className="flex gap-8">
          <Link href={'/login'}>
            <ButtonInicio>Iniciar Seccion</ButtonInicio>
          </Link>
          <Link href={'/register'}>
            <ButtonCreate>Crear Cuenta</ButtonCreate>
          </Link>
        </nav>
      </header>
    </div>
  );
}
