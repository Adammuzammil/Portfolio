import React from "react";
import { Link, useParams } from "react-router";

const projects = [
  {
    name: "Kaizen",
    image: "/assets/images/kz1.png",
  },
  {
    name: "Ripple",
    image: "/assets/images/ripple1.png",
  },
  {
    name: "Ink",
    image: "/assets/images/ink1.png",
  },
  {
    name: "CineVista",
    image: "/assets/images/cv1.png",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="py-24 mt-12 md:mt-16 lg:mt-20"
      data-section="work"
    >
      <div className="max-w-7xl mx-auto md:px-8">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image }) => (
            <Link
              to={`/work`}
              key={name}
              className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/work"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/work:h-full transition-all duration-700 bg-stone-300"></div>
              <div className="relative">
                <div className="aspect-video md:hidden">
                  <img
                    src={image}
                    alt={name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <div className="lg:group-hover/work:pl-8 transition-all duration-700">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  </div>
                  <div className="relative">
                    <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/work:opacity-100 group-hover/work:scale-100 transition-all duration-500 z-10">
                      <img
                        src={image}
                        alt={name}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:group-hover/work:pr-4 transition-all duration-700">
                    <div className="size-6 overflow-hidden">
                      <div className="h-6 w-12 flex group-hover/work:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center mt-16">
          <Link
            to="/work"
            className="relative px-8 py-4 border border-black rounded-full text-lg font-medium transition hover:bg-black hover:text-white"
          >
            More work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;

//https://models.readyplayer.me/67a0bc6e5c836d19da3ecf50.glb
//https://models.readyplayer.me/67a0bfa6f7483b9129d5375c.glb
