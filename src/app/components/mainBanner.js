"use client";
import { useEffect, useRef, useState } from "react";
import Styles from "../styles/banner.css";

export default function Banner() {
  const bannerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  // Initial load animation
  useEffect(() => {
    setAnimate(true);
    setHasAnimatedOnce(true);
  }, []);

  // Observer for scroll-based re-trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasAnimatedOnce) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, [hasAnimatedOnce]);

  const content1 = (
    <>
      <span className="codeBlueDark">document</span>
      <span className="codePurple">.getElementById</span>
      <span className="codeYellow">(</span>
      <span className="codeBlue">&quot;manjeet&quot;</span>
      <span className="codeYellow">)</span> <br />
      <span className="codePurple">.addEventListener</span>
      <span className="codeYellow">(</span>
      <span className="codeBlue">&quot;click&quot;</span>,{" "}
      <br />
      <span className="codeBlueDark">console</span>
      <span className="codePurple">.log</span>
      <span className="codeGreen">(</span>
      <span className="codeBlue">
        &quot;awww you like meeeee?!!!&quot;
      </span>
      <span className="codeGreen">)</span>
      <span className="codeYellow">)</span>;
    </>
  );

  const content2 = (
    <>
      <span className="codeBlueDark">document</span>
      <span className="codePurple">.getElementById</span>
      <span className="codeYellow">(</span>
      <span className="codeBlue">&quot;food&quot;</span>
      <span className="codeYellow">)</span> <br />
      <span className="codePurple">.addEventListener</span>
      <span className="codeYellow">(</span>
      <span className="codeBlue">&quot;click&quot;</span>,{" "}
      <br />
      <span className="codeBlueDark">console</span>
      <span className="codePurple">.log</span>
      <span className="codeGreen">(</span>
      <span className="codeBlue">&quot;No Coffee Only KFC&quot;</span>
      <span className="codeGreen">)</span>
      <span className="codeYellow">)</span>;
    </>
  );

  return (
    <div className="bannerContainer" ref={bannerRef}>
      <div className="bannerSize">
        <div className="firstContainer">
          <h1 className={animate ? "animateIn" : "slideInLeft"}>
            CREATIVE
          </h1>
          <div className="graphic1">
            <p className="mono-font">{content1}</p>
          </div>
        </div>
        <div className="secondContainer">
          <div className="graphic2">
            <p className="mono-font">{content2}</p>
          </div>
          <h1 className={animate ? "animateIn" : "slideInRight"}>
            DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
}
