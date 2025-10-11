import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Icon1 from "../assets/images/icons/warning.svg?react";
import Botao from "../components/Botao";

export default function Formulario() {
  return (
    <>
      <Heading cor="var(--color-primary)">
        <div className="container mx-auto xl:w-2/5 px-4 md:px-8 xl:px-0">
          <Navigation />
          <div className="flex flex-col pb-24">
            <h1 className="text-4xl archivo-bold">
              Que incrível que você quer
              <br />
              ensinar algo.
            </h1>
            <h3 className="text-base mt-4 poppins-regular text-primary-light">
              O primeiro passo, é preencher esse
              <br />
              formulário de inscrição.
            </h3>
          </div>
        </div>
      </Heading>
      <div className="px-4 md:px-8 xl:px-0">
        <div className="container mx-auto w-full xl:w-2/5 rounded-md border border-[#E6E6F0] bg-white -mt-12">
          <div className="p-4 md:p-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Seus dados
              </h2>
              <hr className="border-gray-200 mb-6" />
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Link da sua foto{" "}
                    <span className="text-sm text-gray-400">
                      (comece com //http)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Whatsapp{" "}
                    <span className="text-sm text-gray-400">
                      (somente números)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Biografia</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  ></textarea>
                </div>
              </form>
            </section>
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Sobre a aula
              </h2>
              <hr className="border-gray-200 mb-6" />

              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">Matéria</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                    <option>Selecione qual você quer ensinar</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Custo da sua hora por aula{" "}
                    <span className="text-sm text-gray-400">(em R$)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              </form>
            </section>
            <section className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Horários disponíveis
                </h2>
                <a
                  href="#"
                  className="text-purple-600 text-sm font-medium hover:underline"
                >
                  + Novo horário
                </a>
              </div>
              <hr className="border-gray-200 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block font-medium mb-1">
                    Dia da semana
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                    <option>Selecione o dia</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Das</label>
                  <input
                    type="time"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Até</label>
                  <input
                    type="time"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              </div>
            </section>
          </div>
          <footer className="flex justify-between items-center w-full mt-6 bg-[#FAFAFC] rounded-b-md p-4 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon1 />
              <p>
                <strong>Importante!</strong> Preencha todos os dados
              </p>
            </div>
            <Botao texto="Salvar cadastro" cor="var(--color-primary-dark)" />
          </footer>
        </div>
      </div>
    </>
  );
}
