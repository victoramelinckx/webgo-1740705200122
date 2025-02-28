// components/Hero.tsx
"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "./Button";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
}

export const Hero = ({ headline, subheadline, cta1, cta2 }: HeroProps) => {
  return (
    <section className="flex flex-col relative w-full justify-center items-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <Image
          src="/fondo-premad.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>
      <div className="relative z-10 flex max-lg:flex-col max-md:pt-32 lg:py-[130px] w-full lg:w-11/12 max-w-6xl gap-14 lg:gap-6 lg:justify-between">
        <div className="flex flex-col justify-center text-white md:max-lg:items-center gap-3 sm:gap-6 lg:gap-4 max-w-4xl md:max-lg:text-center max-lg:px-6 lg:mr-10">
          <h1 className="leading-[44px] tracking-[.01em] font-dmsans max-md:text-center font-extrabold text-[44px] md:text-5xl lg:text-6xl lg:leading-[64px]">
            {headline}
          </h1>
          <p className="max-md:mt-4 md:leading-normal max-md:text-center tracking-[.03em] max-sm:font-medium font-[450] max-w-lg mt-2 text-white/90 sm:max-lg:w-4/5">
            {subheadline}
          </p>
          <div className="flex flex-col lg:flex-row max-md:items-center md:space-x-6 mt-4">
            <Link to="proyectos" smooth spy offset={-72}>
              <Button
                title={cta1}
                className="mt-3 bg-primary-500 px-6 py-3 text-black font-semibold w-fit hover:opacity-70"
              />
            </Link>
            <Link to="contacto" smooth spy offset={-72}>
              <Button
                title={cta2}
                className="mt-3 bg-white/30 blur-xs border-solid border-2 px-6 py-3 text-white border-white font-semibold w-fit hover:opacity-70"
              />
            </Link>
          </div>
        </div>
        {/* Stats omitted for brevity; add as props if desired */}
      </div>
    </section>
  );
};
