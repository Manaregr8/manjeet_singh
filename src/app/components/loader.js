import Styles from "../styles/loader.css";
import Image from "next/image";

export default function Loader() {
    const opening = `<!--Hi There! Welcome to Manjeet's Website--!>`;
    return (
        <div className='loader'>
            <div className="loadingio-spinner-ripple-nq4q5u6dq7r"><div className="ldio-x2uulkbinbj">
                <div></div><div></div>
            </div></div>
            <p className="typewriter-text mono-font green">{opening}</p>
        </div>
    );
}
