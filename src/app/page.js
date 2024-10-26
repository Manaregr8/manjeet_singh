import Image from "next/image";
import Footer from "./components/footer";
export default function Home() {
  return (
      <main>  
        <h1>Manjeet Singh</h1>
        <h2>I am a developer</h2>
        <h3>holla</h3>
        <button>
          Submit
        </button>
        <div className="linksContainer"> 
        <a className="links">
        <Image
        className="linksImage"
          src="/codepen.png"
          alt="linkdin Logo"
          width={30}
          height={30}
          priority
        />
        <p>-</p>
        <Image
        className="linksImage"
          src="/codepenProfile.jpeg"
          alt="Profile Image"
          width={30}
          height={30}
          priority
        />
        <p className="linksName">codepen</p>
        </a>
        </div>
        <div className="codesContainer">
          <div className="codesTitle">
            <p className="mono-font">Title</p>
            <p className="mono-font margin-left copy">copy</p>
          </div>
          <div className="codes">
          <p className="mono-font">const newVariable = document.getElementById("root");</p>
          </div>
        </div>
        <Footer />
      </main>
  );
}
