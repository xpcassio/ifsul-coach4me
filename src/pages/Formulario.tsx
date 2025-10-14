import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Icon1 from "../assets/images/icons/warning.svg?react";
import Botao from "../components/Botao";
import {
  useFieldArray,
  useForm,
  Controller,
  type SubmitHandler,
} from "react-hook-form";
import { useEffect } from "react";

type Inputs = {
  name: string;
  avatar: string;
  whatsapp: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Array<{
    week_day: string;
    from: string;
    to: string;
  }>;
};

export default function Formulario() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "schedule",
  });

  function addSlot() {
    append({ week_day: "", from: "", to: "" });
  }

  useEffect(() => {
    document.title = "coach4me - Formulário";
    append({ week_day: "", from: "", to: "" });
    remove(1);
  }, []);

  const days = [
    { value: "", label: "Selecione o dia" },
    { value: 1, label: "Segunda-feira" },
    { value: 2, label: "Terça-feira" },
    { value: 3, label: "Quarta-feira" },
    { value: 4, label: "Quinta-feira" },
    { value: 5, label: "Sexta-feira" },
    { value: 6, label: "Sábado" },
    { value: 7, label: "Domingo" },
  ];

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);

      alert("Cadastro realizado com sucesso!");
      window.location.href = `/listagem/${result.idCoache}?cadastro=sucesso`;
    } catch (error) {
      alert("Erro ao realizar cadastro.");
    }
  };

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
      <form className="px-4 md:px-8 xl:px-0" onSubmit={handleSubmit(onSubmit)}>
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
                    Nome completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Link da sua foto <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("avatar", { required: true })}
                  />
                  <span className="text-sm text-gray-400">
                    Comece com http:://
                  </span>
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Biografia <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("bio", { required: true })}
                  ></textarea>
                </div>
              </form>
            </section>
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Social
              </h2>
              <hr className="border-gray-200 mb-6" />
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">
                    Whatsapp <span className="text-red-400">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("whatsapp", { required: true })}
                  />
                  <span className="text-sm text-gray-400">Somente números</span>
                </div>
                <div>
                  <label className="block font-medium mb-1">Instagram</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("instagram")}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">LinkedIn</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("linkedin")}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">YouTube</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("youtube")}
                  />
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
                  <label className="block font-medium mb-1">
                    Matéria <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-lg p-3 min-h-[50px] text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("subject", { required: true })}
                  >
                    <option>Selecione qual você quer ensinar</option>
                    <option value="matematica">Matemática</option>
                    <option value="portugues">Português</option>
                    <option value="fisica">Física</option>
                    <option value="quimica">Química</option>
                    <option value="biologia">Biologia</option>
                    <option value="geografia">Geografia</option>
                    <option value="historia">História</option>
                    <option value="ingles">Inglês</option>
                    <option value="espanhol">Espanhol</option>
                    <option value="informatica">Informática</option>
                    <option value="artes">Artes</option>
                    <option value="musica">Música</option>
                    <option value="educacao_fisica">Educação Física</option>
                    <option value="filosofia">Filosofia</option>
                    <option value="sociologia">Sociologia</option>
                    <option value="psicologia">Psicologia</option>
                    <option value="direito">Direito</option>
                    <option value="economia">Economia</option>
                    <option value="administracao">Administração</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Custo da sua hora por aula{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    {...register("cost", { required: true })}
                  />
                  <span className="text-sm text-gray-400">Em R$</span>
                </div>
              </form>
            </section>
            <section className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Horários disponíveis
                </h2>
                <button
                  type="button"
                  onClick={addSlot}
                  className="text-purple-600 text-sm font-medium hover:underline"
                >
                  + Novo horário
                </button>
              </div>
              <hr className="border-gray-200 mb-6" />
              <div className="space-y-4">
                {fields.length === 0 && (
                  <p className="text-sm text-gray-500 mb-2">
                    Nenhum horário adicionado.
                  </p>
                )}

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end bg-white p-4 rounded-lg border border-gray-100"
                  >
                    <div className="md:col-span-1">
                      <label className="block font-medium mb-1">
                        Dia da semana <span className="text-red-400">*</span>
                      </label>

                      <Controller
                        control={control}
                        name={`schedule.${index}.week_day`}
                        rules={{ required: "" }}
                        render={({ field: ctrlField }) => (
                          <>
                            <select
                              {...ctrlField}
                              className={`w-full border rounded-lg p-3 min-h-[50px] text-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none `}
                            >
                              {days.map((d) => (
                                <option key={d.value} value={d.value}>
                                  {d.label}
                                </option>
                              ))}
                            </select>
                          </>
                        )}
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">
                        Das <span className="text-red-400">*</span>
                      </label>

                      <Controller
                        control={control}
                        name={`schedule.${index}.from`}
                        rules={{ required: "" }}
                        render={({ field: ctrlField }) => (
                          <>
                            <input
                              type="time"
                              {...ctrlField}
                              className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                            />
                          </>
                        )}
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">
                        Até <span className="text-red-400">*</span>
                      </label>

                      <Controller
                        control={control}
                        name={`schedule.${index}.to`}
                        rules={{
                          required: "",
                        }}
                        render={({ field: ctrlField }) => (
                          <>
                            <input
                              type="time"
                              {...ctrlField}
                              className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                            />
                          </>
                        )}
                      />
                    </div>

                    {index !== 0 && (
                      <div className="md:col-span-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm text-red-600 hover:underline"
                        >
                          Remover
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <footer className="flex flex-col lg:flex-row justify-between items-center w-full mt-6 bg-[#FAFAFC] rounded-b-md p-4 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 lg:mb-0">
              <Icon1 />
              <p>
                <strong>Importante!</strong> Preencha todos os dados
              </p>
            </div>
            <Botao
              texto="Salvar cadastro"
              type="submit"
              cor="var(--color-primary-dark)"
            />
          </footer>
        </div>
      </form>
    </>
  );
}
