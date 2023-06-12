"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="pt-0 h-[calc(100vh-80px)]" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "tween",
              }}
              className="text-colors-headingColor font-semibold text-base"
            >
              Добро пожаловать
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
              }}
              className="text-colors-headingColor font-extrabold text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Иван Гнедько <br />
              Fullstack web developer
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
              }}
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-colors-primaryColor text-white font-medium flex items-center gap-2 hover:bg-colors-smallTextColor ease-in duration-200 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i> Связаться со мной
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-colors-smallTextColor font-semibold text-base border-b border-solid border-colors-smallTextColor"
              >
                Посмотреть портфолио
              </a>
            </motion.div>

            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "tween",
              }}
              className="flex gap-2 text-colors-headingColor mt-14 font-medium text-base leading-7  sm:pr-10"
            >
              Я обладаю обширным опытом в создании высококачественных
              веб-приложений, используя передовые технологии и фреймворки. Мои
              навыки включают разработку с использованием Next.js, Nest.js и
              TypeScript, которые обеспечивают мне эффективность и
              производительность в работе. Я стремлюсь к достижению максимальной
              модульности, расширяемости и поддерживаемости кода, чтобы
              обеспечить оптимальный пользовательский опыт.
            </motion.p>

            <div className="flex items-center gap-9 mt-14">
              {/* <span >
                <a
                  href=""
                  className="text-colors-smallTextColor text-lg font-semibold"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span> */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                }}
              >
                <a
                  href="https://github.com/FemFX"
                  className="text-colors-smallTextColor text-lg font-semibold"
                >
                  <i className="ri-github-fill text-2xl"></i>
                </a>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                }}
              >
                <a
                  href="https://t.me/yraramiii"
                  className="text-colors-smallTextColor text-lg font-semibold"
                >
                  <i className="ri-telegram-line text-2xl"></i>
                </a>
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="basis-1/3 mt-10 sm:mt-0 ml-10"
          >
            <figure className="flex items-center justify-center">
              {/* <Image /> */}
              <Image
                src="/img/me.jpg"
                width={300}
                height={300}
                alt="me"
                className="border"
              />
            </figure>
          </motion.div>

          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-10"
            >
              <h2 className="text-colors-headingColor font-bold text-3xl">
                <CountUp
                  start={0}
                  delay={0.7}
                  end={3}
                  duration={2}
                  suffix="+"
                />
              </h2>
              <h4 className="text-colors-headingColor font-semibold text-lg">
                Лет в разработке
              </h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-10"
            >
              <h2 className="text-colors-headingColor font-bold text-3xl">
                <CountUp
                  start={0}
                  delay={0.7}
                  end={20}
                  duration={2}
                  suffix="+"
                />
              </h2>
              <h4 className="text-colors-headingColor font-semibold text-lg">
                Проектов
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
