"use client";
import { FC, useRef, useEffect } from "react";

const Header: FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 79 ||
        document.documentElement.scrollTop > 79
      ) {
        headerRef.current!.classList.add("sticky__header");
      } else {
        headerRef.current!.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return window.removeEventListener("scroll", stickyHeader);
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr);
    location.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-colors-primaryColor text-lg font-medium text-white rounded-full flex items-center justify-center">
              ИГ
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-colors-smallTextColor font-bold">
                Иван Гнедько
              </h2>
              <p className="text-colors-smallTextColor text-sm font-medium">
                Портфолио
              </p>
            </div>
          </div>

          <div className="menu hidden md:flex">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-colors-smallTextColor text-sm font-semibold"
                  href="#about"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-colors-smallTextColor text-sm font-semibold"
                  href="#services"
                >
                  Технологии
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-colors-smallTextColor text-sm font-semibold"
                  href="#portfolio"
                >
                  Проекты
                </a>
              </li>
              {/* <li>
                <a
                  onClick={handleClick}
                  className="text-colors-smallTextColor text-sm font-semibold"
                  href="#contact"
                >
                  Контактная форма
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div className="flex items-center gap-4">
            <a href="#contact">
              <button className="flex items-center gap-2 text-colors-smallTextColor font-semibold border border-solid border-colors-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-colors-smallTextColor hover:text-white hover:font-medium ease-in duration-150">
                <i className="ri-send-plane-line"></i>
                <span className="hidden sm:flex">Let&apos;s Talk</span>
              </button>{" "}
            </a>
            <span className="text-2xl text-colors-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
