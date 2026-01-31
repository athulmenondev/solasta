import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";

function Hero() {
  /* ----------------------------- Refs ----------------------------- */
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitle2Ref = useRef(null);
  const dateRef = useRef(null);
  const videoRef = useRef(null);

  /* --------------------------- Animations -------------------------- */
  useEffect(() => {
    /* Video loop from 0.5s → 9s */
    if (videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0.5;

      const handleTimeUpdate = () => {
        if (video.currentTime > 9) {
          video.currentTime = 0.5;
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  useEffect(() => {
    const animations = [
      {
        ref: titleRef,
        delay: 0.5,
      },
      {
        ref: subtitleRef,
        delay: 1,
      },
      {
        ref: subtitle2Ref,
        delay: 2.5,
      },
      {
        ref: dateRef,
        delay: 3,
      },
    ];

    animations.forEach(({ ref, delay }) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, delay }
      );
    });
  }, []);

  /* ----------------------------- JSX ------------------------------- */
  return (
    <div className="hero relative xl:hidden h-fit flex flex-col">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/render.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* -------------------------- Text Section -------------------------- */}
      <div className="relative z-10 w-full pt-[8rem] pb-4 px-5 flex flex-col bg-black mix-blend-multiply">
        <h1
          ref={titleRef}
          className="font-chakra sm:text-2xl opacity-0 tracking-widest text-white font-extrabold uppercase md:ml-4 lg:ml-8"
        >
          STACS PRESENTS
        </h1>

        <div
          ref={subtitleRef}
          className="font-clash flex flex-wrap opacity-0 drop-shadow-2xl md:ml-4 lg:ml-8"
        >
          <span className="lg:hidden text-[3.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white font-extrabold uppercase">
            {siteConfig.eventName}
          </span>
          <div className="hidden lg:block relative font-bold uppercase">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/marvel.mp4" type="video/mp4" />
            </video>
            <span className="relative z-10 block bg-black mix-blend-multiply text-[12rem] text-white font-extrabold uppercase p-2">
              {siteConfig.eventName}
            </span>
          </div>

          <span className="text-white relative top-[-3rem] font-chakra text-[7rem] md:text-[9rem] opacity-80 font-extrabold">
            {siteConfig.eventYear}
          </span>
        </div>

        <span
          ref={subtitle2Ref}
          className="opacity-0 relative top-[-5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash text-white/80 font-extrabold uppercase md:ml-4 lg:ml-8"
        >
          {siteConfig.tagline}
        </span>
      </div>

      {/* -------------------------- Date Section -------------------------- */}
      <div className="relative z-10 w-full pb-8 px-5 bg-black">
        <div
          ref={dateRef}
          className="relative opacity-0 flex flex-col font-bold bg-white w-fit text-black p-2 pr-8 rounded-md ml-6 md:ml-10 text-xl md:text-3xl"
        >
          <span className="font-chakra">
            {siteConfig.eventYear}{" "}
            <span className="font-clash">
              {siteConfig.eventDate.month}
            </span>
          </span>

          <span className="flex gap-2 text-[2rem] font-chakra font-bold">
            {siteConfig.eventDate.dates.map((d, i) => (
              <span key={i} className="flex">
                <span className="mr-1">{d.day}</span>
                <b className="text-[16px]">{d.suffix}</b>
              </span>
            ))}
          </span>

          <Image
            src="/edgeTriangle.png"
            width={30}
            height={30}
            alt="edge triangle"
            className="absolute bottom-[-1px] right-[-1px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
