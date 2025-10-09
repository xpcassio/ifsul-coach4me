import Container from "../components/Container";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function Formulario() {
  return (
    <>
      <Heading cor="sky-400" className="h-[320px]">
        <div className="px-4 md:mx-auto md:w-[860px]">
          <Navigation />
          <div className="flex flex-col md:w-1/3">
            <h1 className="text-4xl">
              Que incrível que você quer ensinar algo.
            </h1>
            <h3 className="text-base mt-4">
              O primeiro passo, é preencher esse formulário de inscrição.
            </h3>
          </div>
        </div>
      </Heading>
      <Container className="-mt-8 md:-mt-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        ducimus nostrum sint, perspiciatis molestias esse iste inventore,
        voluptatum autem, unde obcaecati! Reprehenderit aspernatur totam et
        incidunt atque nesciunt amet accusamus. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Consequatur ducimus nostrum sint,
        perspiciatis molestias esse iste inventore, voluptatum autem, unde
        obcaecati! Reprehenderit aspernatur totam et incidunt atque nesciunt
        amet accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Consequatur ducimus nostrum sint, perspiciatis molestias esse iste
        inventore, voluptatum autem, unde obcaecati! Reprehenderit aspernatur
        totam et incidunt atque nesciunt amet accusamus. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Consequatur ducimus nostrum sint,
        perspiciatis molestias esse iste inventore, voluptatum autem, unde
        obcaecati! Reprehenderit aspernatur totam et incidunt atque nesciunt
        amet accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Consequatur ducimus nostrum sint, perspiciatis molestias esse iste
        inventore, voluptatum autem, unde obcaecati! Reprehenderit aspernatur
        totam et incidunt atque nesciunt amet accusamus.
      </Container>
    </>
  );
}
