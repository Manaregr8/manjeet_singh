import Image from "next/image";
import Links from "./links.js";
import Codes from "./codes.js";
export default function extra() {
  return (
      <>  
        <h1>Manjeet Singh</h1>
        <h2>I am a developer</h2>
        <h3>holla</h3>
        <button>
          Submit
        </button>
        <div className="linksContainer"> 
            <Links 
            mainSrc = "https://codepen.io/manaregr8/collections/"
            src1 = "/codepen.png"
            alt1 = "codepen logo"
            src2 = "/codepenProfile.jpeg"
            alt2 = "codepen profile pic" 
            name = "Codepen" />
            <Links 
            mainSrc = "https://www.freecodecamp.org/Manaregr8"
            src1 = "/freecodecamp.png"
            alt1 = "FCC logo"
            src2 = "/freecodecampProfile.jpg"
            alt2 = "FCC profile pic" 
            name = "FreeCodeCamp" />
        </div>
        <Codes 
        title = "Manjeets Code component"
        data = {`const variable = document.getElementById("root");`}
        />
        </>
  );
}
