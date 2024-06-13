import { useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);
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
        action=""
        className="flex w-full justify-center flex-col gap-5 items-center"
      >
        <div className="w-full flex justify-center relative">
          <input
            type="text"
            placeholder="Full Name *"
            className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b placeholder-white"
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
          />
          <div
            className={`${
              focusName ? "w-full lg:w-3/4" : " w-0"
            }  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-purple-500 transition-all duration-500`}
          ></div>
        </div>
        <div className="w-full flex justify-center relative">
          <input
            type="text"
            placeholder="Email *"
            className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b placeholder-white"
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
            placeholder="Message *"
            onFocus={() => setFocusMessage(true)}
            onBlur={() => setFocusMessage(false)}
            className="p-4 w-full lg:w-3/4 bg-transparent focus:outline-none border-b h-[300px] resize-none placeholder-white"
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
