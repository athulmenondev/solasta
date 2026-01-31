import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function InitialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 1.2, ease: "easeOut" },
        }}
        className="relative"
      >
        <h1 
          className="font-serif text-[60px] md:text-[96px] font-bold tracking-[10px] text-white text-center uppercase drop-shadow-[0_0_10px_#00F0FF] select-none"
        >
          {siteConfig.eventName}
        </h1>
        <motion.div
          className="absolute -inset-8 bg-main_primary/20 blur-3xl rounded-full z-[-1]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="mt-8 h-1 w-48 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        <motion.div
          className="h-full bg-main_primary box-shadow-[0_0_10px_#00F0FF]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
