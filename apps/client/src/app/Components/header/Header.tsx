import Image from 'next/image';

import logo from '@/app/assets/landingpage/soundwave.png';

import { ButtonCreate } from '../Buttons/seccion/Button_Create';
import { ButtonInicio } from '../Buttons/seccion/button_Inicio';
export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between px-8 py-8">
        <Image src={logo} alt="Logo" width={353} height={54} priority />
        <nav className="flex gap-8">
          <ButtonInicio>Iniciar Seccion</ButtonInicio>
          <ButtonCreate>Crear Cuenta</ButtonCreate>
        </nav>
      </header>
    </div>
  );
}
