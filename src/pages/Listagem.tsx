import Container from "../components/Container";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function Listagem() {
  return (
    <>
      <Heading cor="blue-500">
        <div className="flex flex-col px-4 md:px-8 md:w-1/3">
          <Navigation />
          <div className="flex flex-col md:w-1/3">
            <h1 className="text-4xl">Estes são os coachs disponíveis.</h1>
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
        amet accusamus.
      </Container>
    </>
  );
}
