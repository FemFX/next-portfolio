import { FC } from "react";
import { portfolio } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";

const Portfolio: FC = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-7 sm:mb-0  mx-auto">
            <h3 className="text-colors-headingColor text-[2rem] font-bold">
              Мои проекты
            </h3>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          {portfolio.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>
        {/* <div className="flex items-center justify-center gap-4 flex-wrap mt-6 sm:flex-row flex-col">
          {portfolio.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
