export default function Buscador() {
  return (
    <div className="m-4 w-[92%] items-center md:m-8 md:w-[95%]">
      <div className="flex h-12 overflow-auto rounded-full border border-gray-500 bg-white focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center text-gray-600"></div>
        <input
          className="peer w-[100%] border-none pr-2 text-sm text-gray-600  outline-none"
          type="textarea"
          id="search"
          placeholder="¿Qué quieres compartir hoy?"
        />
      </div>
    </div>
  );
}
