"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          About Us
        </h1>
        <p className="text-xl text-muted-foreground">
          UDDHESHYA GROUP is a forward-thinking marketing agency that combines
          creativity, data-driven strategies, and cutting-edge technology to
          deliver exceptional results for our clients.
        </p>
        <p className="text-xl text-muted-foreground mt-4">
          Founded in 2025, we've grown from a small team of passionate marketers
          to a full-service agency with expertise across all digital channels.
        </p>
      </motion.div>

      <motion.div
        className="relative h-auto aspect-[16/10] rounded-xl overflow-hidden shadow-lg ring-1 ring-primary/10 bg-white p-4 md:p-6"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/image.png"
          alt="UDDHESHYA STUDIO team"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="object-contain object-center"
        />
      </motion.div>
    </div>
  );
}
