/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import Image from 'next/image';

import Audifonos from '@/app/assets/landingpage/audifonos.png';
import Mujer from '@/app/assets/landingpage/mujer.png';
import ola from '@/app/assets/landingpage/ola.png';
import perrito from '@/app/assets/landingpage/p.jpg';
import { ButtonDos } from '@/app/Components/desk/Buttons/landing/Button_dos';
import { ButtonUno } from '@/app/Components/desk/Buttons/landing/Button_uno';
import Header from '@/app/Components/header/Header';

import Footer from './footer/footer';
import { ButtonCuatro } from './mobile/buttons/Button_cuatro';
import { ButtonTres } from './mobile/buttons/Button_tres';
export default function Landing() {
  return (
    <div>
      <Header />
      <section className="md:gab-10 md:width-[100%] flex ">
        <section className="md:flex md:flex-col md:justify-evenly">
          <h2 className=" pr-5 pt-10 text-end text-[20px] font-bold text-orange-500 md:w-[595px] md:text-center md:text-[42px]">
            Explora, compra y descubre la música de talentosos artistas de todo el mundo.
          </h2>
          <div className="hidden  md:flex md:w-full md:justify-evenly md:pb-36">
            <ButtonUno>CONOCE MAS</ButtonUno>
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </div>
        </section>
        <div className=" z-10 md:relative md:h-[765.35px] md:w-[680.32px]">
          <Image src={Audifonos} alt="audifonos" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 pt-7">
        <ButtonTres>CONOCE MAS</ButtonTres>
        <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
      </section>
      {/* segunda */}
      <section className="flex flex-col items-center justify-evenly pb-40">
        <h3 className="z-10 hidden w-[851px] text-[38px] font-bold leading-10 text-orange-500 md:block">
          Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo talento.
        </h3>

        <section className="md:flex">
          <div className="relative z-10 flex items-center justify-evenly pt-10 ">
            <div className="">
              <Image
                className="h-[286px] w-[800px] md:mt-24 md:h-[750px] md:w-[864px]"
                src={Mujer}
                alt="Mujer"
              />
            </div>

            <h3 className="flex-shrink text-center text-[20px] font-bold leading-10 text-orange-500 md:hidden">
              Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo
              talento.
            </h3>
          </div>

          <div className=" flex flex-col gap-5 p-5 md:flex md:flex-col md:justify-evenly md:pr-20">
            <div className=" z-10 md:relative md:h-[165px] md:w-[512px]">
              <h4 className="font-bold leading-loose text-orange-500 md:absolute md:left-0 md:top-0 md:w-[490.42px] md:text-[30px]">
                SoundWave Marketplace
              </h4>
              <p className="left-0 font-medium leading-loose text-zinc-700 md:absolute md:top-[45px] md:w-[512px] md:text-[21px]">
                Explora un amplio catálogo de músicos talentosos y descubre nuevo talento. Además,
                al adquirir sus obras musicales, apoyas directamente al artista, ya que el 100% de
                la venta se destina directamente a ellos.
              </p>
            </div>
            <div className=" relative z-10 md:h-[165px] md:w-[512px]">
              <h4 className="left-0 top-0 font-bold leading-loose text-orange-500 md:absolute md:w-[490.42px] md:text-[30px]">
                SoundWave Social
              </h4>
              <p className="left-0 font-medium leading-loose text-zinc-700 md:absolute md:top-[45px] md:w-[512px] md:text-[21px]">
                Conecta con tu artista favorito y descubre sus próximas presentaciones. Interactúa
                con ellos y sé parte de su comunidad de seguidores
              </p>
            </div>
            <div className="z-10 flex justify-center pt-10">
              <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
              <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
            </div>
          </div>
        </section>
        <div className="absolute z-0 md:top-[700px]">
          <Image className="h-[800px]  md:h-[1200px] md:w-[1440px]" src={ola} alt="ola" />
        </div>
      </section>
      {/* tercera */}
      <div className="hidden flex-col items-center justify-center md:flex">
        <h5 className="w-[1104px] text-center text-[28px] font-medium text-zinc-700">
          Si eres un creador de música, has llegado al lugar correcto.
        </h5>
        <h2 className="w-[711px] text-center text-[38px] font-bold text-orange-500">
          Tu música es la protagonista y tú tienes el control total sobre su valor.
        </h2>
      </div>

      <section className="hidden h-[740px] items-center justify-evenly md:flex">
        <div>
          <div className="w-[506px]">
            <span className="text-[32px] font-normal leading-10 text-black">
              Tú decides el valor de tu música y lo mejor de todo es que recibirás el 100% de las
              ganancias.
              <br />
              <br />
            </span>
            <span className="text-[32px] font-bold leading-10 text-black">
              ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
            </span>
          </div>
          <div className="mb-20 hidden pt-5 text-center md:block">
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </div>
        </div>
        <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
      </section>

      <div className="hidden flex-col items-center justify-center bg-yellow-50 md:flex">
        <section className="ite flex items-center justify-evenly gap-20">
          <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
          <div>
            <div className="flex w-[643px] flex-col justify-evenly gap-2">
              <span className="text-[32px] font-bold leading-10 text-orange-500">
                SoundWave Marketplace
                <br />
              </span>
              <span className="m text-[26px] font-normal leading-10 text-zinc-700">
                Comparte tu talento con el mundo y obtén el 100% de las ganancias sin cargos ocultos
                ni comisiones abusivas. Valora tu música y benefíciate directamente de tu esfuerzo.
              </span>
              <div className="pt-20 text-start">
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="hidden h-[740px] items-center justify-evenly md:flex">
        <div className="flex flex-col justify-evenly gap-2">
          <div className="SoundwaveSocialElEspacioIdeaDondePuedesPuedeInteractuarDirectamenteConSuAudienciaPromocionarSuMSicaYCompartirInformaciNSobreSusPresentacionesEnVivo w-[575px]">
            <span className="text-[32px] font-bold leading-10 text-orange-500">
              SoundWave Social
              <br />
            </span>
            <span className="text-[26px] font-normal leading-10 text-zinc-700">
              El espacio ideal donde puedes interactuar directamente con tu audiencia, promocionar
              tu música y compartir información sobre tus presentaciones en vivo
            </span>
            <span className="text-[26px] font-normal leading-10 text-black">.</span>
          </div>
          <div className="pt-10">
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </div>
        </div>
        <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
      </section>

      <div className="hidden flex-col items-center justify-center bg-yellow-50 md:flex">
        <section className="ite flex items-center justify-evenly gap-20">
          <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
          <div>
            <div className="w-[643px]">
              <span className="text-[32px] font-bold leading-10 text-orange-500">
                SoundWave Marketplace
                <br />
              </span>
              <span className="text-[26px] font-normal leading-10 text-zinc-700">
                Comparte tu talento con el mundo y obtén el 100% de las ganancias sin cargos ocultos
                ni comisiones abusivas. Valora tu música y benefíciate directamente de tu esfuerzo.
              </span>
              <div className="pt-20 text-start">
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="flex flex-col items-center justify-evenly gap-10 md:h-[809px]">
        <h3 className=" text-center font-semibold text-zinc-700 md:w-[755px] md:text-[38px]">
          Únete de forma gratuita a SoundWave, la comunidad que te llevará a vivir la experiencia de
          ser un músico exitoso.
        </h3>
        <div className="text-center">
          <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
        </div>
        <div>
          <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
        </div>
      </section>
      <Footer />
    </div>
  );
}
