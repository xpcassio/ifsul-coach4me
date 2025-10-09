import Botao from "../components/Botao";
import Icon1 from "../assets/images/icons/study.svg?react";
import Icon2 from "../assets/images/icons/give-classes.svg?react";
import LandingImage from "../assets/images/landing.svg?react";
import LogoImage from "../assets/images/logo.svg?react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto h-screen flex flex-col justify-center xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-between mb-10 items-center">
          <div className="flex flex-col">
            <LogoImage className="w-80 lg:w-[100%]" />
            <h2 className="poppins-regular text-2xl text-primary-light mt-2 md:mt-6 xl:mt-10">
              Encontre monitores
              <br />
              online facilmente.
            </h2>
          </div>
          <LandingImage className="w-50 md:w-80 lg:w-100" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <Botao
              texto="Estudar"
              cor="var(--color-primary-dark)"
              size="lg"
              href="/listagem"
              icon={<Icon1 className="size-7" />}
            />
            <Botao
              texto="Dar aulas"
              cor="var(--color-primary)"
              size="lg"
              href="/formulario"
              icon={<Icon2 className="size-7" />}
            />
          </div>
          <p className="text-primary-lighter mb-0 text-sm">
            Total de 285 conexões já realizadas 🧡
          </p>
        </div>
      </div>
    </>
  );
}
