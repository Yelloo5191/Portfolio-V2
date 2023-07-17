import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";

const ThreeCanvas = ({ sphereState }) => {
	const containerRef = useRef<HTMLInputElement | null>();
	let scene, camera, renderer, geometry, material, sphere;

	useEffect(() => {
		const initThreeJS = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

			renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setSize(500, 500);

			containerRef.current.appendChild(renderer.domElement);

			geometry = new THREE.SphereGeometry(30, 15, 15);
			material = new THREE.MeshBasicMaterial({
				color: 0xffffff,
				wireframe: true,
			});
			sphere = new THREE.Mesh(geometry, material);

			scene.add(sphere);

			camera.position.z = 60;
		};

		const animate = () => {
			requestAnimationFrame(animate);
			sphere.rotation.x += 0.01;
			sphere.rotation.y += 0.005;

			renderer.render(scene, camera);
		};

		initThreeJS();
		animate();

		return () => {
			renderer.dispose();
			geometry.dispose();
			material.dispose();
		};
	});

	return <Box ref={containerRef} />;
};

export default ThreeCanvas;
