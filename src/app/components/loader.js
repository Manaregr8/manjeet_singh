import Styles from "../styles/loader.css";
import Image from "next/image";

export default function Loader() {
    const opening = `<!--Hi There! Welcome to Manjeet's Website--!>`;
    return (
        <div className='loader'>
            <Image className="loaderimage"
            src="/loader.gif"
            alt="loader"
            width={80}
            height={80}
            priority
            />
            <p className="typewriter-text mono-font green">{opening}</p>
        </div>
    );
}
