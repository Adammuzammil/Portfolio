import React from "react";

const Intro = () => {
  return (
    <section id="about" className="py-24  bg-[#F1F0EA]">
      <div className="container mx-auto">
        <h2 className=" font-semibold text-black text-3xl md:text-5xl text-center my-6">
          A Glimpse into my world
        </h2>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 mb-20">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black overflow-hidden">
            <img
              src="/assets/images/wink.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-xl md:text-2xl lg:text-3xl font-satoshi text-black/65 font-medium">
            <p>
              I'm just a curious guy who loves creating cool and fun stuff. I
              like to dive into different areas just because they intrigue me,
              and once I've got the hang of it, I move on to something new.
            </p>
            <p>
              I'm all about crafting sites with strong focus on excellent user
              experience and accessibility.
            </p>
            <p>
              Note: For real - I'm not the best developer but I take pride in my
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
