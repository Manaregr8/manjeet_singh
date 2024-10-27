import Styles from "../styles/banner.css";

export default function Banner() {
    return (
        <div className="bannerContainer">
            <video autoPlay loop muted playsInline className="backgroundVideo">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="bannerCover">
                <main>
                    <h1>Build Your Brand With Us</h1>
                </main>
            </div>
        </div>
    );
}