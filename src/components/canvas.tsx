import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";

const ThreeCanvas = ({ sphereState }) => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(30, 15, 15);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    camera.position.z = 60;

    return () => {
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, [sphereState]);

  useEffect(() => {
    if (!containerRef.current) return;


    const animate = () => {
      requestAnimationFrame(animate);

      if (sphereState === "info") {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      } else if (sphereState === "projects") {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      } else if (sphereState === "contact") {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      } else {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.005;
      }


      renderer.render(scene, camera);
    };

    animate();
  }, [sphereState]);

  return <Box ref={containerRef} />;
};

export default ThreeCanvas;
