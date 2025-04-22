"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GradientCircle() {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const sphereRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!mountRef.current) return;

    // 🎬 Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.set(0, 0, 2000);
    cameraRef.current = camera;

    // ✅ WebGL Renderer (for 3D Sphere)
    const webglRenderer = new THREE.WebGLRenderer({ alpha: true });
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(webglRenderer.domElement);

    // ✅ CSS3D Renderer (for HTML elements)
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = "absolute";
    cssRenderer.domElement.style.top = "0";
    mountRef.current.appendChild(cssRenderer.domElement);

    // 🟢 Create a WebGL 3D Sphere
    const sphereGeometry = new THREE.SphereGeometry(100, 92, 92);
    const sphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vPosition;
          void main() {
            // Create a vertical gradient from top to bottom
            float gradient = (vPosition.y + 100.0) / 200.0;
            
            // Mix two colors for the gradient
            vec3 color = mix(vec3(0.2, 0.6, 1.0), vec3(1.0, 0.3, 0.7), gradient);
            
            // Apply color to the wireframe
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        wireframe: true, // Enable wireframe rendering
        wireframeLinewidth: 1, // Adjust the width of the wireframe lines (optional)
      });
      
      
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphereRef.current = sphere;

    // 🧩 Handle Responsiveness
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      webglRenderer.setSize(window.innerWidth, window.innerHeight);
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 🎞 Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
      }
      webglRenderer.render(scene, camera);
      cssRenderer.render(scene, camera);
    }
    animate();

    // 🎯 Smooth Scroll Animation with Pinning
    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: mountRef.current,
        start: "top top",
        end: "+=500",
        scrub: 1,
        pin: true,
      },
      z: 200,
      ease: "power2.out",
    });

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(webglRenderer.domElement);
      mountRef.current.removeChild(cssRenderer.domElement);
      scene.remove(sphere);
      webglRenderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
}
