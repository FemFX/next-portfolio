"use client";
import clsx from "clsx";
import { FC } from "react";
import { motion } from "framer-motion";

interface IServiceCardProps {
  pos: "left" | "right";
  title: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ pos, title }) => {
  return (
    <motion.div
      initial={
        pos === "left" ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }
      }
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-6 sm:mt-0 sm:mb-12"
    >
      <div className="flex items-center flex-col sm:flex-row">
        <div
          className={clsx(
            pos === "left" ? "justify-end" : "justify-start",
            "flex w-full mx-auto items-center"
          )}
        >
          <div
            className={clsx(
              pos === "left" ? "sm:pl-8" : "sm:pr-8",
              "w-full sm:w-1/2 "
            )}
          >
            <div className="bg-white p-4 rounded shadow hover:bg-colors-primaryColor hover:text-white cursor-pointer">
              {title}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
