import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useForm();
  const { register, handleSubmit, reset, formState } = form;
  const { errors } = formState;
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.submit();
    reset();
  };
  return (
    <div className=" pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-center flex-col gap-5 items-center"
        noValidate
        data-netlify="true"
        name="contact-form"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="w-full flex justify-center relative">
          <div className="flex flex-col w-full items-center">
            <input
              type="text"
              name="fullName"
              placeholder={
                errors.fullName?.message
                  ? errors.fullName?.message
                  : "Full name *"
              }
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full name is required.",
                },
              })}
              className={`${
                errors.fullName?.message
                  ? "placeholder-red-500"
                  : "placeholder-white"
              } p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b`}
              onFocus={() => setFocusName(true)}
              onBlur={() => setFocusName(false)}
            />
          </div>
          <div
            className={`${
              focusName ? "w-full lg:w-3/4" : " w-0"
            }  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-purple-500 transition-all duration-500`}
          ></div>
        </div>
        <div className="w-full flex justify-center relative">
          <input
            type="email"
            name="email"
            placeholder={
              errors.email?.message ? errors.email?.message : "Email *"
            }
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },
              pattern: {
                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: "Invalid email.",
              },
            })}
            className={`${
              errors.email?.message
                ? "placeholder-red-500"
                : "placeholder-white"
            } p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b`}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
          />
          <div
            className={`${
              focusEmail ? "w-full lg:w-3/4" : " w-0"
            }  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-purple-500 transition-all duration-500`}
          ></div>
        </div>
        <div className="w-full flex justify-center relative">
          <textarea
            type="text"
            name="message"
            placeholder={
              errors.message?.message ? errors.message?.message : "Message *"
            }
            {...register("message", {
              required: {
                value: true,
                message: "Message is required.",
              },
            })}
            onFocus={() => setFocusMessage(true)}
            onBlur={() => setFocusMessage(false)}
            className={`${
              errors.message?.message
                ? "placeholder-red-500"
                : "placeholder-white"
            } p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b`}
          />

          <div
            className={`${
              focusMessage ? "w-full lg:w-3/4" : " w-0"
            }  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-purple-500 transition-all duration-500`}
          ></div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button className="px-5 py-2 bg-transparent border flex justify-center w-full lg:w-3/4 hover:bg-white hover:text-black transition-colors duration-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
