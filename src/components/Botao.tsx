type BotaoProps = {
  texto: string;
  cor?: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export default function Botao({
  texto,
  cor = "bg-blue-500",
  href,
  icon,
  className,
  size = "md",
}: BotaoProps) {
  let varPx: string;
  let varPy: string;

  if (size === "md") {
    varPx = "40px";
    varPy = "15px";
  } else {
    varPx = "45px";
    varPy = "25px";
  }

  return (
    <>
      {href ? (
        <a
          href={href}
          className={`rounded px-[${varPx}] py-[${varPy}] text-white ${cor} ${className}`}
        >
          {icon && <span>{icon}</span>}
          {texto}
        </a>
      ) : (
        <button
          className={`rounded px-[${varPx}] py-[${varPy}] text-white ${cor} ${className}`}
        >
          {icon && <span>{icon}</span>}
          {texto}
        </button>
      )}
    </>
  );
}
