import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function Listagem() {
  return (
    <>
      <Heading cor="var(--color-primary-dark)">
        <div className="container mx-auto xl:w-2/5 px-4 md:px-8 xl:px-0">
          <Navigation />
          <div className="flex flex-col pb-24">
            <h1 className="text-4xl archivo-bold">
              Estes são os
              <br />
              coachs disponíveis.
            </h1>
          </div>
        </div>
      </Heading>
      <div className="px-4 md:px-8 xl:px-0">
        <div className="container mx-auto w-full xl:w-2/5 rounded-md border border-indigo-200 bg-white -mt-12 p-4 md:p-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          ducimus nostrum sint, perspiciatis molestias esse iste inventore,
          voluptatum autem, unde obcaecati! Reprehenderit aspernatur totam et
          incidunt atque nesciunt amet accusamus. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consequatur ducimus nostrum sint,
          perspiciatis molestias esse iste inventore, voluptatum autem, unde
          obcaecati! Reprehenderit aspernatur totam et incidunt atque nesciunt
          amet accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Consequatur ducimus nostrum sint, perspiciatis molestias esse
          iste inventore, voluptatum autem, unde obcaecati! Reprehenderit
          aspernatur totam et incidunt atque nesciunt amet accusamus. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          ducimus nostrum sint, perspiciatis molestias esse iste inventore,
          voluptatum autem, unde obcaecati! Reprehenderit aspernatur totam et
          incidunt atque nesciunt amet accusamus. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consequatur ducimus nostrum sint,
          perspiciatis molestias esse iste inventore, voluptatum autem, unde
          obcaecati! Reprehenderit aspernatur totam et incidunt atque nesciunt
          amet accusamus.
        </div>
      </div>
    </>
  );
}
