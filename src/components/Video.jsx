import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";

function Video() {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        console.log("video ended");
        videoRef.current.currentTime = 10;
        videoRef.current.play();
      });
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });
    tl.to(
      textRef.current,
      {
        translateY: -300,
      },
      0
    );
    tl.to(
      videoRef.current,
      {
        filter: "grayscale(80%)",
      },
      0
    );
  }, []);

  return (
    <div ref={triggerRef} className="video-section hidden xl:block relative w-full h-screen bg-black overflow-hidden">
      <video 
        ref={videoRef} 
        src="/marvel.mp4" 
        autoPlay 
        muted 
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      ></video>
      <div className="video-copy absolute inset-0 z-10 bg-black mix-blend-multiply flex items-center justify-center">
        <h1 ref={textRef} className="vidDarpan font-bebas text-[15rem] font-bold text-white tracking-wider">
          {siteConfig.eventName}
        </h1>
      </div>
    </div>
  );
}

export default Video;
