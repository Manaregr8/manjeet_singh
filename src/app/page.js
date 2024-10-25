import Image from "next/image";
export default function Home() {
  return (
      <main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Manjeet Singh</h1>
        <h2>I am a developer</h2>
        <h3>holla</h3>
        <button>
          Submit
        </button>
        <a className="links">
        <Image
        className="linksImage"
          src="/window.svg"
          alt="linkdin Logo"
          width={20}
          height={20}
          priority
        />
        <Image
        className="linksImage"
          src="/vercel.svg"
          alt="Profile Image"
          width={20}
          height={20}
          priority
        />
        <p className="linksName">codepen</p>
        </a>
      </main>
  );
}
