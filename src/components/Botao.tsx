type BotaoProps = {
  texto: string;
  cor?: string;
  hover?: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: "md" | "lg" | "custom";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Botao({
  texto,
  cor = "bg-blue-500",
  hover,
  href,
  icon,
  className,
  size = "md",
  type = "button",
  onClick,
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
          style={{
            backgroundColor: cor,
            ...(hover ? { hover: { backgroundColor: hover } } : {}),
            ...(size !== "custom" ? { padding: `${varPy} ${varPx}` } : {}),
          }}
          onClick={onClick}
        >
          <span className={texto ?? "mr-4"}>{icon}</span>
          {texto}
        </a>
      ) : (
        <button
          className={`flex items-center gap-2 justify-center rounded text-white cursor-pointer ${className}`}
          style={{
            backgroundColor: cor,
            ...(hover ? { hover: { backgroundColor: hover } } : {}),
            ...(size !== "custom" ? { padding: `${varPy} ${varPx}` } : {}),
          }}
          onClick={onClick}
          type={type}
        >
          <span className={texto ?? "mr-4"}>{icon}</span>
          {texto}
        </button>
      )}
    </>
  );
}
