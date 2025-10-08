import Heading from "../components/Heading";

export default function Formulario() {
  return (
    <Heading cor="sky-400">
      <div className="flex flex-col px-8 lg:w-1/3">
        <h1 className="text-4xl">Que incrível que você quer ensinar algo.</h1>
        <h3 className="text-base mt-4">
          O primeiro passo, é preencher esse formulário de inscrição.
        </h3>
      </div>
    </Heading>
  );
}
