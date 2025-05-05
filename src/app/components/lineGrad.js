"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./gradientLine.module.css";

const GradientLine = () => {
  const lineRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={lineRef}
        className={`${styles.gradientLine} ${inView ? styles.animate : ""}`}
      />
    </div>
  );
};

export default GradientLine;
