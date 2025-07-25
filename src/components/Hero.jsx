import React from "react";

//importing woman image
import WomanImg from "../assets/woman_hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-[800px] bg-[url('/src/assets/bg_hero.svg')] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMIN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-black">Discover More</Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="woman Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
