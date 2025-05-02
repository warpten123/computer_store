"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    title: "High-Performance CPUs",
    description:
      "Explore our latest lineup of processors for gaming and productivity.",
    image: "/heropics/hero1.jpg",
  },
  {
    title: "Powerful GPUs",
    description: "Experience next-gen graphics for your PC builds.",
    image: "/heropics/hero2.jpg",
  },
  {
    title: "Reliable Storage",
    description: "Fast and durable SSDs and HDDs to store everything you need.",
    image: "/heropics/hero3.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className={styles.hero}>
      <div className={styles.card} key={current}>
        <img src={slide.image} alt={slide.title} className={styles.image} />
        <div className={styles.text}>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className={styles.controls}>
            <button onClick={prevSlide}>&lt;</button>
            <button onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
