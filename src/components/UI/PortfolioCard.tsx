"use client";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IPortfolioCardProps {
  title: string;
  stack: string[];
  link: string;
}

const PortfolioCard: FC<IPortfolioCardProps> = ({ link, stack, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 1,
      }}
      viewport={{ once: true }}
      className="group relative z-10 text-center cursor-pointer shadow-xl max-h-[200px] text-colors-smallTextColor rounded-xl px-10 py-7 "
    >
      <div className="uppercase md:text-base font-semibold pt-6">{title}</div>
      <ul className=" flex justify-evenly my-3">
        {stack.map((item, idx) => {
          return (
            <li key={idx}>
              <Image
                src={`/img/${item}`}
                alt={item.split(".")[0]}
                width={30}
                height={30}
              />
            </li>
          );
        })}
      </ul>
      <button className="flex items-center gap-2 border-colors-smallTextColor font-semibold border border-solid text-colors-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] -smallTextColor  hover:font-medium ease-in duration-150 justify-center mx-auto hover:bg-colors-smallTextColor hover:text-white">
        <Link href={link}>See details</Link>
      </button>
      {/* <div className="w-full h-full bg-colors-primaryColor bg-opacity-40 absolute top-0 l-0 z-20 hidden group-hover:block">
        <button>See details</button>
      </div> */}
    </motion.div>
  );
};

export default PortfolioCard;
