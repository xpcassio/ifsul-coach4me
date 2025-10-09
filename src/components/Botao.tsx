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
          className={`flex items-center justify-center rounded text-white ${className}`}
          style={{ backgroundColor: cor, padding: `${varPy} ${varPx}` }}
        >
          {icon && <span className="mr-4">{icon}</span>}
          {texto}
        </a>
      ) : (
        <button
          className={`flex items-center gap-2 justify-center rounded text-white ${className}`}
          style={{ backgroundColor: cor, padding: `${varPy} ${varPx}` }}
        >
          {icon && <span className="mr-4">{icon}</span>}
          {texto}
        </button>
      )}
    </>
  );
}
