/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Sphere() {
	const ref = useRef<THREE.Mesh>(null!);

	useFrame(() => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.005;
	});

	return (
		<mesh ref={ref} scale={1}>
			<sphereGeometry args={[3, 16, 16]} />
			<meshDistanceMaterial />
		</mesh>
	);
}

export default function MyCanvas() {
	return (
		<Canvas style={{ width: "100px", height: "100px" }}>
			{/* <ambientLight intensity={1} />
			<spotLight position={[10, 10, 10]} angle={0.45} penumbra={1} />
			<pointLight position={[-10, -10, -10]} /> */}
			<Sphere />
		</Canvas>
	);
}
