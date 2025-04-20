import Image from "next/image";
import Extra from "./components/extra.js";
import MainBanner from "./components/mainBanner.js";
import SkillsSection from "./components/skillsSection.js";

export default function Home() {
  return (
      <>  

      <MainBanner />
      <SkillsSection/>
      {/*
    <Extra />
      */}
      </>
  );
}
