"use client";
import Styles from "../styles/loader.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Loader() {
  const opening = `<!--Hi There! Welcome to Manjeet's Website--!>`;

  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => {
        const loaderElement = document.querySelector(".loader");
        if (loaderElement) {
          loaderElement.style.display = 'none';
        }
      }, 5500);
    };
    hideLoader();
  }, []);

  return (
    <div className="loader">
      <div className="loadingio-spinner-ripple-nq4q5u6dq7r">
        <div className="ldio-x2uulkbinbj">
          <div></div><div></div>
        </div>
      </div>
      <p className="typewriter-text mono-font green">{opening}</p>
    </div>
  );
}
