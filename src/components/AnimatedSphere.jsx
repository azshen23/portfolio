import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshDistortMaterial,
  ContactShadows,
  useScroll,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const AnimatedMaterial = a(MeshDistortMaterial);

function AnimatedSphere() {
  const sphere = useRef();
  const sphereGeo = useRef();
  const light = useRef();
  const aniMaterial = useRef();
  const data = useScroll();
  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
    )}'), auto`;
  });
  let scale = 1;
  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ coat, color, ambient, env }] = useSpring(
    {
      coat: 1,
      ambient: 1.5,
      env: 0.4,
      color: "#abcdf3",
    },
    []
  );
  useFrame(() => {
    const offset = 1 - data.offset;
    if (sphere.current.position.y) {
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(offset) * 2,
        0.2
      );
      aniMaterial.current.distort = THREE.MathUtils.lerp(
        aniMaterial.current.distort,
        0.4 * (1 - offset),
        0.2
      );
      scale = THREE.MathUtils.lerp(
        scale,
        1 + (3 - 1) * Math.exp((-1 * offset) / 0.05),
        0.2
      );
      console.log(scale);
      sphere.current.scale.x = scale;
      sphere.current.scale.y = scale;
      sphere.current.scale.z = scale;
    }
  });

  return (
    <>
      <a.ambientLight intensity={ambient} />
      <a.pointLight
        ref={light}
        position-z={-15}
        intensity={env}
        color="#FFFFFF"
      />
      <Suspense fallback={null}>
        <a.mesh ref={sphere} scale={scale} position={[0, 1, 0]}>
          <sphereGeometry ref={sphereGeo} args={[1, 64, 64]} />
          <AnimatedMaterial
            ref={aniMaterial}
            distort={0}
            speed={3}
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={1}
          />
        </a.mesh>
        <Environment preset="city" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={50}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}

export default AnimatedSphere;
