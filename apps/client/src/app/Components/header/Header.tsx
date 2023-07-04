import logo from '@/app/assets/landingpage/soundwave.png'
import Image from "next/image";
import { ButtonInicio } from '../Buttons/seccion/button_Inicio';
import { ButtonCreate } from '../Buttons/seccion/Button_Create';
export default function Header() {
  return (
    <div>
      <header className='flex justify-between px-8 items-center py-8'>
        <Image
          src={logo}
          alt="Logo"
          width={353}
          height={54}
          priority
        />
        <nav className='flex gap-8'>
            <ButtonInicio>Iniciar Seccion</ButtonInicio>
            <ButtonCreate>Crear Cuenta</ButtonCreate>
        </nav>
      </header>
    </div>
  )
}
