import Image from "next/image";
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
      </main>
  );
}
