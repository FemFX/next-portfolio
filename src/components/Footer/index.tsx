import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl leading-10 text-white font-semibold mb-5 md:text-[2rem]">
              Иван Гнедько
            </h2>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Я всегда открыт для новых возможностей и сотрудничества.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-6 mt-10">
              <span className="text-gray-300 font-semibold text-base">
                Follow me:
              </span>
              <span className="">
                <a
                  href="https://github.com/FemFX"
                  className="text-colors-smallTextColor text-lg font-semibold"
                >
                  <i className="ri-github-fill text-white text-2xl  "></i>
                </a>
              </span>
              <span className="">
                <a
                  href="https://t.me/yraramiii"
                  className="text-colors-smallTextColor text-lg font-semibold"
                >
                  <i className="ri-telegram-line text-white text-2xl  "></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="menu ">
          <ul className="flex items-center gap-10 pb-3">
            <li>
              <a className="text-gray-400 text-sm font-semibold" href="#about">
                Обо мне
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-sm font-semibold"
                href="#services"
              >
                Технологии
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-sm font-semibold"
                href="#portfolio"
              >
                Проекты
              </a>
            </li>
            {/* <li>
              <a
                className="text-gray-400 text-sm font-semibold"
                href="#contact"
              >
                Контактная форма
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
