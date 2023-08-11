    /* eslint-disable */
    import * as THREE from 'three'
    import * as React from 'react'
    import { useRef, useState, useEffect } from 'react'
    import { Canvas, useFrame } from '@react-three/fiber'

    function Sphere(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    const [speed, setSpeed] = useState(5);

    const damping = 0.95;

    useFrame((state, delta) => {
        if (props.sphereState.idle) {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.005;
        } else if (props.sphereState.info) {
        ref.current.rotation.x += speed * delta;
        ref.current.rotation.y += speed * delta;

            if (speed < 0.001) {
                setSpeed(0)
                props.setSphereState({"idle": false, "info": false, "projects": false, "contact": false, "paused": true})
            } else {
                setSpeed((prevSpeed) => prevSpeed * damping);
            }
        } else if (props.sphereState.projects) {
            ref.current.rotation.x += speed * delta;
            ref.current.rotation.y += speed * delta;

            if (speed < 0.001) {
                setSpeed(0)
                props.setSphereState({"idle": false, "info": false, "projects": false, "contact": false, "paused": true})
            } else {
                setSpeed((prevSpeed) => prevSpeed * damping);
            }
        } else if (props.sphereState.contact) {
            ref.current.rotation.x += speed * delta;
            ref.current.rotation.y += speed * delta;

            if (speed < 0.001) {
                setSpeed(0)
                props.setSphereState({"idle": false, "info": false, "projects": false, "contact": false, "paused": true})
            } else {
                setSpeed((prevSpeed) => prevSpeed * damping);
            }
        } else if (props.sphereState.paused) {
            setSpeed(5);
            const { x, y } = state.mouse;
        
            const mousePosition = {
              x: (x / state.viewport.width) * 2 - 1,
              y: -(y / state.viewport.height) * 2 + 1
            };
        
            const targetRotationX = mousePosition.y * 0.1;
            const targetRotationY = mousePosition.x * 0.1;
        
            ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.1;
            ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.1;
          }
    });

    return (
        <mesh
        {...props}
        ref={ref}
        scale={1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[30, 15, 15]} />
        <meshStandardMaterial color='0xffffff' wireframe={true}/>
        </mesh>
    )
    }

    export default function MyCanvas({state, setState}) {
    return (   
        <Canvas style={{ width: '100%', height: '100%'}}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Sphere sphereState={state} setSphereState={setState} position={[0, 0, -60]} />
            <camera position={[0, 0, 1000]} />
        </Canvas>
    )
    }
