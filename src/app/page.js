import Image from "next/image";
import Extra from "./components/extra.js";
import MainBanner from "./components/mainBanner.js";
import SkillsSection from "./components/skillsSection.js";
import ThreeJs from "./components/threeJs.js";
import ThreeJsHeader from "./components/threeJsHeader.js";
export default function Home() {
  return (
      <>  

      <MainBanner />
      <ThreeJsHeader />
      <ThreeJs />
      <SkillsSection/>

      {/*
    <Extra />
      */}
      </>
  );
}
