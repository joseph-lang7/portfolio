import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useForm();
  const { register, formState, handleSubmit, reset } = form;
  const [clientName, setClientName] = useState("");
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    try {
      const fetchOptions = {
        method: "POST",
        body: new URLSearchParams(data).toString(),
        headers: {
          "Content-Type": "Applications/x-www-form-urlencoded",
        },
      };
      const res = await fetch("/__contact-form.html", fetchOptions);
      if (res.ok) {
        setClientName(data.fullName);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
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
      {isSubmitSuccessful && (
        <p className="text-center">
          Thank you, <span className="capitalize">{clientName}</span>, I&apos;ll
          reach out shortly.
        </p>
      )}

      <form
        className="flex w-full justify-center flex-col gap-5 items-center"
        noValidate
        name="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="w-full flex justify-center relative">
          <div className="flex w-full flex-col items-center">
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              placeholder="Full name *"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full name is required.",
                },
              })}
              className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b focus:border-b-purple-500 transition-colors duration-500"
            />
            <p className="flex flex-start w-full lg:w-3/4 text-red-500">
              {errors.fullName?.message}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center relative">
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email *"
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
            className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b focus:border-b-purple-500 transition-colors duration-500"
          />
          <p className="flex flex-start w-full lg:w-3/4 text-red-500">
            {errors.email?.message}
          </p>
        </div>
        <div className="w-full flex flex-col items-center relative">
          <textarea
            type="text"
            name="message"
            autoComplete="off"
            placeholder="Message *"
            {...register("message", {
              required: {
                value: true,
                message: "Message is required.",
              },
            })}
            className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b focus:border-b-purple-500 transition-colors duration-500"
          />
          <p className="flex flex-start w-full lg:w-3/4 text-red-500">
            {errors.message?.message}
          </p>
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
