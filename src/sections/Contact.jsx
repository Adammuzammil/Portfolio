import { MoveUpRight } from "lucide-react";
import grainImg from "/assets/images/grain.jpg";

const Contact = () => {
  return (
    <div className=" py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container px-12 mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-50"
            style={{
              backgroundImage: `url(${grainImg})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:justify-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 font-satoshi">
                Ready to bring your next project to Life? Let's connect and
                discuss on how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <MoveUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
