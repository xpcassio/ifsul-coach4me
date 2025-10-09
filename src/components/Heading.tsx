type HeadingProps = {
  cor: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Heading({
  cor,
  className = "",
  children,
}: HeadingProps) {
  return (
    <div className={`w-screen min-h-[220px] bg-${cor} text-white ${className}`}>
      {children}
    </div>
  );
}
