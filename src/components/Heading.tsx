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
    <div
      className={`w-full min-h-[220px] text-white ${className}`}
      style={{ backgroundColor: cor }}
    >
      {children}
    </div>
  );
}
