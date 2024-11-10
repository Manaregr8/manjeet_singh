import Styles from "../styles/banner.css";
import Navbar from "./navbar.js";
export default function Banner() {
    const content1 = (
        <>
            <span className="codeBlueDark">document</span>
            <span className="codePurple">.getElementById</span>
            <span className="codeYellow">(</span>
            <span className="codeBlue">"manjeet"</span>
            <span className="codeYellow">)</span> <br />
            <span className="codePurple">.addEventListener</span>
            <span className="codeYellow">(</span>
            <span className="codeBlue"> "click" </span>,
            <span className="codeBlueDark"> console</span> 
            <span className="codePurple">.log</span><br />
            <span className="codeGreen">(</span>
            <span className="codeBlue">"awww you like meeeee?!!!"</span>
            <span className="codeGreen">)</span>
            <span className="codeYellow">)</span>;
        </>
    );
    const content2= (
        <>
            <span className="codeBlueDark">document</span>
            <span className="codePurple">.getElementById</span>
            <span className="codeYellow">(</span>
            <span className="codeBlue">"food"</span>
            <span className="codeYellow">)</span> <br />
            <span className="codePurple">.addEventListener</span>
            <span className="codeYellow">(</span>
            <span className="codeBlue"> "click" </span>,
            <span className="codeBlueDark"> console</span> 
            <span className="codePurple">.log</span><br />
            <span className="codeGreen">(</span>
            <span className="codeBlue">"No Coffee Only KFC"</span>
            <span className="codeGreen">)</span>
            <span className="codeYellow">)</span>;
        </>
    );
    return (
        <div className="bannerContainer">
            <div className="bannerSize">
                <div className="firstContainer">
                    <h1>CREATIVE</h1>
                    <div className="graphic1"><p className="mono-font">{content1}</p>
                    </div>
                </div>
                <div className="secondContainer">
                <div className="graphic2"><p className="mono-font">{content2}</p></div>
                    <h1>DEVELOPER</h1>
                </div>
            </div>
        </div>
    );
}