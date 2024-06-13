import { ABOUT_TEXT } from "../../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="mt-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src="/about-img.png" alt="analyst illustration" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
