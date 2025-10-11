import Botao from "../components/Botao";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Icon1 from "../assets/images/icons/whatsapp.svg?react";

export default function Listagem() {
  return (
    <>
      <Heading cor="var(--color-primary-dark)">
        <div className="container mx-auto xl:w-2/5 px-4 md:px-8 xl:px-0">
          <Navigation />
          <div className="flex flex-col pb-24">
            <h1 className="text-4xl archivo-bold">
              Estes são os
              <br />
              coachs disponíveis.
            </h1>
          </div>
        </div>
      </Heading>
      <div className="px-4 md:px-8 xl:px-0">
        <div className="container mx-auto w-full xl:w-2/5 -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block font-medium mb-1">Matéria</label>
              <select className="w-full border border-gray-200 rounded-lg p-3 min-h-[50px] text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white">
                <option>Selecione o dia</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Dia da semana</label>
              <select className="w-full border border-gray-200 rounded-lg p-3 min-h-[50px] text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white">
                <option>Selecione o dia</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Horário</label>
              <input
                type="input"
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full xl:w-2/5 rounded-md border border-[#E6E6F0] bg-white mt-12">
          <div className="p-4 md:p-8">
            <div className="flex items-center gap-3">
              {/* Imagem do perfil */}
              <img
                src="https://placehold.co/400"
                alt="Foto do usuário"
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* Informações */}
              <div>
                <h3 className="text-lg archivo-bold text-gray-800">
                  Flávio Augusto de Freitas
                </h3>
                <p className="text-sm poppins-regular text-gray-500">
                  Desenvolvimento Mobile
                </p>
              </div>
            </div>
            <p className="mt-6 poppins-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              maxime accusantium, laborum mollitia iusto amet soluta optio id,
              eaque non voluptatem exercitationem cumque tempore fugit nesciunt
              asperiores perferendis minus unde!
            </p>
            <p className="mt-6 poppins-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              consectetur!
            </p>
          </div>
          <footer className="flex justify-between items-center w-full mt-6 bg-[#FAFAFC] rounded-b-md p-4 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <p>
                Preço/hora{" "}
                <span className="archivo-bold text-primary-light">
                  R$ 50,00
                </span>
              </p>
            </div>
            <Botao
              texto="Entrar em contato"
              cor="var(--color-secondary)"
              hover="var(--color-secondary-dark)"
              icon={<Icon1 />}
            />
          </footer>
        </div>
      </div>
    </>
  );
}
