import CardMusic from './CardMusic';
export default function Topdies() {
  return (
    <div>
      <h2 className=" text-[32px] font-semibold leading-normal text-zinc-700">
        Top 10 - Lo más vendido por nuestros artistas
      </h2>
      <section className="mt-20 flex gap-4">
        <section>
          <CardMusic />
          <CardMusic />
        </section>
        <section>
          <CardMusic />
          <CardMusic />
        </section>
      </section>
    </div>
  );
}
