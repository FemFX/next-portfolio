"use client";
import { IInputs } from "@/types";
import axios from "axios";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const onSubmit = async (data: IInputs) => {
    try {
      await axios.post("http://localhost:4000", data);
    } catch (err) {
      toast.error("Что-то пошло не так...");
      console.log(err);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="font-bold text-colors-headingColor text-[2.5rem] mb-8">
          Контакная форма
        </h2>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 sm-h-[450px] lg:flex items-center bg-indigo-100 lg:px-8 py-8 rounded">
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
              <div className="mb-5">
                <input
                  {...register("email", {
                    required: "Введите email",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Неправильный Email!",
                    },
                  })}
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email?.message}</span>
                )}
              </div>
              <div className="mb-5">
                <input
                  {...register("subject", {
                    required: "Введите тему",
                  })}
                  type="text"
                  placeholder="Тема"
                  className="w-full p-3 focus:outline-none rounded-md"
                />

                {errors.subject && (
                  <span className="text-red-600">
                    {errors.subject?.message}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  {...register("message", {
                    required: "Введите сообщение",
                  })}
                  rows={3}
                  placeholder="Сообщение"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
                {errors.message && (
                  <span className="text-red-600">
                    {errors.message?.message}
                  </span>
                )}
              </div>
              <button className="w-full p-3 focus:outline-none rounded-md bg-colors-smallTextColor text-white hover:bg-colors-headingColor text-center ease-linear duration-150">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
