import Heading from "../components/Heading";

export default function Listagem() {
  return (
    <Heading cor="blue-500">
      <div className="flex flex-col px-8 lg:w-1/3">
        <h1 className="text-4xl">Estes são os coachs disponíveis.</h1>
      </div>
    </Heading>
  );
}
