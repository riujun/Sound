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
export default function Landing() {
  return (
    <div>
      <Header />
      <section className="gab-10 width-[100%] flex">
        <section className="flex flex-col justify-evenly">
          <h2 className="w-[595px]  text-center text-[42px] font-bold text-orange-500">
            Explora, compra y descubre la música de talentosos artistas de todo el mundo.
          </h2>
          <div className="flex w-full justify-evenly pb-36">
            <ButtonUno>CONOCE MAS</ButtonUno>
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </div>
        </section>
        <div className=" z-10 h-[765.35px] w-[680.32px]">
          <Image src={Audifonos} alt="audifonos" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center pb-40">
        <h3 className="z-10 w-[851px] text-[38px] font-bold leading-10 text-orange-500">
          Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo talento.
        </h3>
        <section className="flex">
          <div className="z-10">
            <Image className="mt-24 h-[750px] w-[864px]" src={Mujer} alt="Mujer" />
          </div>
          <div className="flex flex-col justify-evenly pr-20">
            <div className="Group2 relative z-10 h-[165px] w-[512px]">
              <h4 className="absolute left-0 top-0 w-[490.42px] text-[30px] font-bold leading-loose text-orange-500">
                SoundWave Marketplace
              </h4>
              <p className="absolute left-0 top-[45px] w-[512px] text-[21px] font-medium leading-loose text-zinc-700">
                Explora un amplio catálogo de músicos talentosos y descubre nuevo talento. Además,
                al adquirir sus obras musicales, apoyas directamente al artista, ya que el 100% de
                la venta se destina directamente a ellos.
              </p>
            </div>
            <div className="Group2 relative z-10 h-[165px] w-[512px]">
              <h4 className="absolute left-0 top-0 w-[490.42px] text-[30px] font-bold leading-loose text-orange-500">
                SoundWave Social
              </h4>
              <p className="absolute left-0 top-[45px] w-[512px] text-[21px] font-medium leading-loose text-zinc-700">
                Conecta con tu artista favorito y descubre sus próximas presentaciones. Interactúa
                con ellos y sé parte de su comunidad de seguidores
              </p>
            </div>
            <div className="z-10 flex justify-center">
              <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
            </div>
          </div>
        </section>
        <div className="absolute top-[700px] z-0">
          <Image className="h-[1030px] w-[1440px]" src={ola} alt="ola" />
        </div>
      </section>
      <div className="flex  flex-col  items-center justify-center">
        <h5 className="w-[1104px] text-center text-[28px] font-medium text-zinc-700">
          Si eres un creador de música, has llegado al lugar correcto.
        </h5>
        <h2 className="w-[711px] text-center text-[38px] font-bold text-orange-500">
          Tu música es la protagonista y tú tienes el control total sobre su valor.
        </h2>
      </div>
      <section className="ite flex h-[740px] items-center justify-evenly">
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
        </div>
        <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
      </section>
      <div className="mb-20 text-center">
        <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
      </div>
      <div className="Rectangle2 flex h-[740px] items-center justify-center  bg-yellow-50">
        <section className="ite flex items-center justify-evenly gap-20">
          <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
          <div>
            <div className=" flex w-[643px]  flex-col justify-evenly gap-2">
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
      <section className="flex h-[740px] items-center justify-evenly">
        <div className="flex flex-col justify-evenly gap-2 ">
          <div className="SoundwaveSocialElEspacioIdeaDondePuedesPuedeInteractuarDirectamenteConSuAudienciaPromocionarSuMSicaYCompartirInformaciNSobreSusPresentacionesEnVivo w-[575px]">
            <span className="text-[32px] font-bold leading-10 text-orange-500">
              SoundWave Social
              <br />
            </span>
            <span className="text-[26px] font-normal leading-10 text-zinc-700">
              El espacio idea donde puedes puede interactuar directamente con su audiencia,
              promocionar su música y compartir información sobre sus presentaciones en vivo
            </span>
            <span className="text-[26px] font-normal leading-10 text-black">.</span>
          </div>
          <div className="pt-10">
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </div>
        </div>
        <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
      </section>
      <div className="Rectangle2 flex h-[740px] items-center justify-center  bg-yellow-50">
        <section className="ite flex items-center justify-evenly gap-20">
          <Image className="h-[410px] w-[559px]" src={perrito} alt="perrito" />
          <div>
            <div className=" w-[643px]">
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
      <section className="flex h-[809px] flex-col items-center justify-evenly">
        <h3 className=" w-[755px] text-center text-[38px] font-semibold text-zinc-700">
          Únete de forma gratuita a SoundWave, la comunidad que te llevará a vivir la experiencia de
          ser un músico exitoso.
        </h3>
        <div className="text-center">
          <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
        </div>
      </section>
    </div>
  );
}
