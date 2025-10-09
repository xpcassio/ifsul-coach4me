type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={`bg-white px-4 mx-4 rounded-md border border-indigo-200 md:mx-auto md:w-[860px] ${className}`}
    >
      {children}
    </div>
  );
}
