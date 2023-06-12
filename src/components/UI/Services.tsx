import { FC } from "react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

const Services: FC = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-colors-headingColor font-extrabold text-[2.4rem] mb-5">
            Мой стек технологий
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-colors-headingColor font-medium text-base leading-7 ">
            Я имею опыт работы с различными технологиями, языками
            программирования и фреймворками. Вот мой примерный стек технологий:
            <span className="font-semibold">
              JavaScript, TypeScript, React(Next.js), Node.js(Nest.js),
              Postgresql, Typeorm, Tailwind, Redux, Graphql, Rabbitmq, Docker
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {services.map((item, idx) => {
                if (idx % 2 === 0) {
                  return (
                    <ServiceCard key={idx} pos="right" title={item.title} />
                  );
                }
                return <ServiceCard key={idx} pos="left" title={item.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
