import Styles from "../styles/banner.css";
import Navbar from "./navbar.js";
export default function Banner() {
    return (
        <div className="bannerContainer">
            <div className="bannerSize">
                <div className="firstContainer">
                    <h1>CREATIVE</h1>
                </div>
                <div className="secondContainer">
                    <h1>DEVELOPER</h1>
                </div>
            </div>
        </div>
    );
}