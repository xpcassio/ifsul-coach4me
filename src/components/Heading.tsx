import Navigation from "./Navigation";

type HeadingProps = {
  cor: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Heading({ cor, className, children }: HeadingProps) {
  return (
    <div className={`w-screen min-h-[272px] bg-${cor} text-white ${className}`}>
      <Navigation />
      {children}
    </div>
  );
}
