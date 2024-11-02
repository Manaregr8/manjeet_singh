"use client";
import { useEffect } from "react";
import Styles from "../styles/navbar.css";

export default function navbar(){
    useEffect(() => {
        const menuToggler = document.getElementsByClassName("menuToggler")[0];
        const navLinks = document.getElementsByClassName("navlinks")[0];

        const toggleMenu = () => {
            navLinks.classList.toggle("menutoggle");
        };

        if (menuToggler) {
            menuToggler.addEventListener("click", toggleMenu);
        }
        return () => {
            if (menuToggler) {
                menuToggler.removeEventListener("click", toggleMenu);
            }
        };
    }, []);
    return (
        <nav>
            <h5>MANJEET SINGH</h5>
            <div className="navlinks">
                <a href="/">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/projects">PROJECTS</a>
                <a href="/Hire us">HIRE US</a>
            </div>
            <button className="menuToggler">MENU</button>
            <button className="hireMe">HIRE ME</button>
        </nav>
    );
}