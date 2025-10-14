import Botao from "../components/Botao";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Icon from "../assets/images/icons/heart-outline.png";
import Icon1 from "../assets/images/icons/whatsapp.svg?react";
import Icon2 from "../assets/images/icons/iconmonstr-instagram-13.svg?react";
import Icon3 from "../assets/images/icons/iconmonstr-linkedin-3.svg?react";
import Icon4 from "../assets/images/icons/iconmonstr-youtube-3.svg?react";
import Icon5 from "../assets/images/icons/unfavorite.png";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import convertToReal from "../utils/convert-to-real";
import { handleSaveFavorite, isFavorite } from "../utils/save-to-storage";

export default function Listagem() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const cadastro = queryParams.get("cadastro");
  const { id } = useParams();

  const [successMessage, setSuccessMessage] = useState("");
  const [coachData, setCoachData] = useState([]);

  const fetchCoach = async () => {
    try {
      const response = await fetch(`http://localhost:3001/coaches/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do treinador");
      }

      const data = await response.json();
      setCoachData(data);
      console.log(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const fetchAllCoaches = async () => {
    try {
      const response = await fetch("http://localhost:3001/coaches");

      if (!response.ok) {
        throw new Error("Erro ao buscar dados dos treinadores");
      }

      const data = await response.json();
      setCoachData(data);
      console.log(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    document.title = "coach4me - Listagem";

    if (cadastro) {
      setSuccessMessage("Cadastro realizado com sucesso!");
      // Opcional: Remover a mensagem após um tempo
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // 3 segundos

      return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }

    if (id) fetchCoach();
    else fetchAllCoaches();
  }, [cadastro, id]);

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
                <option></option>
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
        {successMessage && (
          <div className="container mx-auto w-full xl:w-2/5 mt-12">
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
              {successMessage}
            </div>
          </div>
        )}
        {coachData.map((field, index) => (
          <div className="container mx-auto w-full xl:w-2/5 rounded-md border border-[#E6E6F0] bg-white mt-12">
            <div className="p-4 md:p-8">
              <div className="flex items-center gap-3">
                {/* Imagem do perfil */}
                <img
                  src={field.avatar}
                  alt="Foto do usuário"
                  className="w-14 h-14 rounded-full object-cover"
                />

                {/* Informações */}
                <div>
                  <h3 className="text-lg archivo-bold text-gray-800">
                    {field.name}
                  </h3>
                  <p className="text-sm poppins-regular text-gray-500">
                    {field.subject}
                  </p>
                </div>
              </div>
              <p className="mt-6 poppins-regular">{field.bio}</p>
              <div className="mt-6 flex">
                {field.instagram && (
                  <Botao
                    texto=""
                    cor=""
                    href={field.instagram}
                    icon={<Icon2 className="fill-gray-300" />}
                    size="custom"
                    className="text-black! py-4 pr-4"
                  />
                )}
                {field.linkedin && (
                  <Botao
                    texto=""
                    cor=""
                    href={field.linkedin}
                    icon={<Icon3 className="fill-gray-300" />}
                    size="custom"
                    className="text-black! py-4 pr-4"
                  />
                )}
                {field.youtube && (
                  <Botao
                    texto=""
                    cor=""
                    href={field.youtube}
                    icon={<Icon4 className="fill-gray-300" />}
                    size="custom"
                    className="text-black! py-4 pr-4"
                  />
                )}
              </div>
            </div>

            <footer className="flex flex-col lg:flex-row justify-between items-center w-full mt-6 bg-[#FAFAFC] rounded-b-md p-4 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 lg:mb-0">
                <p>
                  Preço/hora{" "}
                  <span className="archivo-bold text-primary-light">
                    ${convertToReal(field.cost)}
                  </span>
                </p>
              </div>
              <div className="flex gap-4">
                <Botao
                  texto=""
                  cor="var(--color-red)"
                  hover="var(--color-red-dark)"
                  icon={
                    <img
                      src={!isFavorite(field.id) ? Icon : Icon5}
                      alt="coracao"
                    />
                  }
                  onClick={handleSaveFavorite.bind(null, field.id)}
                />
                <Botao
                  href={`https://wa.me/${field.whatsapp}`}
                  texto="Entrar em contato"
                  cor="var(--color-secondary)"
                  hover="var(--color-secondary-dark)"
                  icon={<Icon1 className="mr-4" />}
                />
              </div>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
}
