import Botao from "./Botao";
import Logo from "../assets/images/icons/back.svg?react";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center mx-auto py-4 px-4 md:px-8">
        <Botao texto="" cor="" href="/" icon={<Logo />} />
        <Botao texto="Coach 4 Me" cor="" href="/" />
      </div>
    </>
  );
}
