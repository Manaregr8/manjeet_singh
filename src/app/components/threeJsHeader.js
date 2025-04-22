import React from 'react';
import Styles from "./threeJsHeader.module.css";
import { ChevronsRight } from "lucide-react";
const ThreeJsHeader = () => {
    return (
        <header className={Styles.threeJsHeader}>
            <h1 className={Styles.threeH1}>Looks Simple Yet <span className={Styles.complex}>COMPLEX !</span></h1>
            <img className={Styles.threeJsLogo} src="/graphics.svg" alt="graphic" />
        </header>
    );
};

export default ThreeJsHeader;