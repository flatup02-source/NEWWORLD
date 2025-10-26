"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* === Hero Video Section === */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="https://ik.imagekit.io/FLATUPGYM/output_compressed.mp4?updatedAt=1758848662650" type="video/mp4" />
        </video>
      </section>

      {/* === Text Section Below === */}
      <motion.section
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>新しい自分へ、心と身体で感じる。</h1>
        <p>その一振りが、未来を変える。</p>
        <a href="https://lin.ee/21ape6V" className="cta">
          💖「新しい私」への覚悟💖
        </a>
      </motion.section>
    </>
  );
}
