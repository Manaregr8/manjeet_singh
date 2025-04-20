"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./SkillsSection.module.css";
import {
  Atom, Code, LayoutDashboard, Leaf, SquareTerminal, Server,
  FileCode, Figma, Code2, Flame, GitBranch, Triangle, Zap,
  Framer, Waves, Bold, Globe, Brain, Shuffle, Ship,
  Copy, FilePenLine
} from "lucide-react";

const SkillsSection = () => {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const techStackWithIcons = [
    { name: "React.js", icon: Atom },
    { name: "TypeScript", icon: Code },
    { name: "Next.js", icon: LayoutDashboard },
    { name: "MongoDB", icon: Leaf },
    { name: "Express.js", icon: SquareTerminal },
    { name: "Node.js", icon: Server },
    { name: "JavaScript", icon: FileCode },
    { name: "FIGMA", icon: Figma },
    { name: "Python", icon: Code2 },
    { name: "Firebase", icon: Flame },
    { name: "Git/GitHub", icon: GitBranch },
    { name: "Three.js", icon: Triangle },
    { name: "Chakra UI", icon: Zap },
    { name: "Framer Motion", icon: Framer },
    { name: "Tailwind", icon: Waves },
    { name: "Bootstrap", icon: Bold },
    { name: "WordPress", icon: Globe },
    { name: "AI/ML Integration", icon: Brain },
    { name: "CI/CD", icon: Shuffle },
    { name: "Docker", icon: Ship },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setVisibleCount(index);
      if (index >= techStackWithIcons.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className={Styles.skillssection}>
      <div className={Styles.skillscontainer}>
        <div className={Styles.skillsheader}>
          <p className={`${Styles.language} mono-font`}>js</p>
          <div className={Styles.leftHeadSkill}>
            <a href="#skills" className={`${Styles.copylink} mono-font`}><Copy className={Styles.copyStyles} />Copy</a>
            <a href="#edit" className={`${Styles.editlink} mono-font`}><FilePenLine className={Styles.copyStyles} />Edit</a>
          </div>
        </div>
        <div className={Styles.skillscontent}>
          <p className='mono-font' style={{ color: '#2a81b5' }}>
            const <span style={{ color: 'white' }}>Skills =</span> [
          </p>
          <div ref={containerRef} className={`${Styles.Skillscards} mono-font`}>
            {techStackWithIcons.slice(0, visibleCount).map(({ name, icon: Icon }, index) => (
              <div key={index} className={Styles.skillItem}>
                <Icon className={Styles.skillIcon} />
                <span className={Styles.skillName}>
  "{name}"{index < visibleCount - 1 ? "," : ""}
</span>
              </div>
            ))}
          </div>
          <p className='mono-font' style={{ color: '#2a81b5' }}>]</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
