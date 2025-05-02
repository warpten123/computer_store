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

const categories = [
  {
    title: "Laptops",
    description: "Explore a wide range of laptops for work, gaming, and more.",
    imageUrl: "/category/cat1.webp",
  },
  {
    title: "Monitors",
    description: "Find high-quality monitors for gaming and productivity.",
    imageUrl: "/category/cat2.png",
  },
  {
    title: "Peripherals",
    description: "Shop for keyboards, mice, and other computer peripherals.",
    imageUrl: "/category/cat3.webp",
  },
  {
    title: "Graphics Cards",
    description: "Upgrade your PC with the latest graphics cards.",
    imageUrl: "/category/cat4.jpg",
  },
  {
    title: "System Units",
    description: "Discover powerful system units for all your needs.",
    imageUrl: "/category/cat5.png",
  },
  {
    title: "Computer Parts",
    description: "Discover powerful system units for all your needs.",
    imageUrl: "/category/cat6.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <>
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
      {/*SECOND CARD*/}
      <section className={styles.catalogSection}>
        <div className={styles.catalogCard}>
          <h2>Browse by Category</h2>
          <div className={styles.categories}>
            {categories.map((category, index) => (
              <div key={index + 1} className={styles.categoryCard}>
                <img src={category.imageUrl} alt={category.title} />
                <span>{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
