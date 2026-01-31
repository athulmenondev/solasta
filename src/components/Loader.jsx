import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md">
      {/* Container to center everything */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute w-24 h-24 border-[3px] border-transparent border-t-main_primary border-r-main_primary rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring - spinning opposite */}
        <motion.div
          className="absolute w-16 h-16 border-[3px] border-transparent border-b-white border-l-white rounded-full opacity-80"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Core - Pulsing */}
        <motion.div
          className="w-4 h-4 bg-main_primary rounded-full shadow-[0_0_20px_#00F0FF]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
