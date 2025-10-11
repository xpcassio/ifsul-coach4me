import Botao from "./Botao";
import Logo from "../assets/images/icons/back.svg?react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <>
      <div className="flex justify-between items-center mx-auto py-4">
        <Botao
          texto=""
          cor=""
          href="#"
          icon={<Logo />}
          size="custom"
          className="py-4 pr-4"
          onClick={handleBack}
        />
        <Botao
          texto="Coach 4 Me"
          cor=""
          href="/"
          size="custom"
          className="py-4 pl-4 archivo-regular"
        />
      </div>
    </>
  );
}
