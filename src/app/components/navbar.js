"use client";
import { useEffect } from "react";
import Styles from "../styles/navbar.css";
import Link from "next/link";
export default function Navbar(){
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
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/projects">PROJECTS</Link>
                <Link href="/Hire us">HIRE US</Link>
            </div>
            <button className="menuToggler">MENU</button>
            <button className="hireMe">HIRE ME</button>
        </nav>
    );
}