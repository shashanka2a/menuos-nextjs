"use client";

import { motion } from "framer-motion";
import { QrCode, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface QRScanScreenProps {
  onContinue: () => void;
}

export function QRScanScreen({ onContinue }: QRScanScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#FFFBEA] to-white flex flex-col items-center justify-center px-6"
    >
      <div className="flex flex-col items-center max-w-md w-full">
        {/* Animated QR Icon */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))",
              "drop-shadow(0 0 30px rgba(249, 115, 22, 0.5))",
              "drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <QrCode className="w-32 h-32 text-[#F97316]" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-4 text-[#1C1C1E]"
        >
          Scan to Discover Deliciousness
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-[#1C1C1E]/70 mb-12 max-w-sm"
        >
          No app needed — scan, browse, and order instantly.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          <Button
            onClick={onContinue}
            className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white h-14 rounded-full group transition-all"
          >
            <span>Scan Now</span>
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* MenuPro Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center"
        >
          <img 
            src="/menupro-logo.svg" 
            alt="MenuPro Logo" 
            className="h-8 w-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}