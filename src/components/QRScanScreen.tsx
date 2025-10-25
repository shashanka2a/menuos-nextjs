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
        {/* Halal Shack Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <img 
              src="/menupro-logo.svg" 
              alt="Halal Shack Logo" 
              className="h-24 w-auto mx-auto"
            />
          </div>
        </motion.div>

        {/* Animated QR Code */}
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
          <div className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <a 
              href="https://halalshack-menuos.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent('https://halalshack-menuos.vercel.app/')}`}
                alt="QR Code to MenuOS - Click to open"
                className="w-32 h-32 mx-auto"
              />
            </a>
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
          className="text-center text-[#1C1C1E]/70 mb-4 max-w-sm"
        >
          No app needed — scan, browse, and order instantly.
        </motion.p>

        {/* URL Display */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-[#1C1C1E]/50 text-sm mb-2">Visit our digital menu at:</p>
          <p className="text-[#F97316] font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg">
            https://halalshack-menuos.vercel.app/
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
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

        {/* MenuOS Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-col items-center justify-center space-y-3"
        >
          <img 
            src="/menupro-logo.svg" 
            alt="MenuOS Logo" 
            className="h-12 w-auto"
          />
          <h2 className="text-[#1C1C1E] text-lg font-semibold">MenuOS</h2>
        </motion.div>
      </div>
    </motion.div>
  );
}