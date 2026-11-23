import { MathUtils, Vector3 } from "three";
import { useRef, useEffect, useMemo } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
const fullZoomValue = 2.05;
const lookAtTarget = new Vector3(0, 0, 1);

export default function Pokeball({ getZoomed, getZoomedOut }) {
  const group = useRef();
  const pokeBallTop = useRef();
  const prevZoomed = useRef(false);
  const prevZoomedOut = useRef(true);
  const { scene, nodes, materials } = useGLTF("/models/twinleafBall.glb");
  const scroll = useScroll();

  // Merge all 150 static Town_mat meshes into a single draw call
  const mergedTownGeometry = useMemo(() => {
    scene.updateMatrixWorld(true);
    const geometries = [];
    scene.traverse((obj) => {
      if (
        obj.isMesh &&
        obj.name !== "PokeballBottom" &&
        obj.name !== "PokeballTop" &&
        obj.geometry
      ) {
        const cloned = obj.geometry.clone();
        cloned.applyMatrix4(obj.matrixWorld);
        geometries.push(cloned);
      }
    });
    const merged = geometries.length > 0 ? mergeGeometries(geometries) : null;
    geometries.forEach((g) => g.dispose());
    return merged;
  }, [scene]);

  useEffect(() => {
    return () => {
      if (mergedTownGeometry) {
        mergedTownGeometry.dispose();
      }
    };
  }, [mergedTownGeometry]);

  useEffect(() => {
    if (materials.Pokeball_mat) {
      materials.Pokeball_mat.roughness = 0.2;
      materials.Pokeball_mat.metalness = 0.4;
      materials.Pokeball_mat.envMapIntensity = 1.4;
      materials.Pokeball_mat.needsUpdate = true;
    }
    if (materials.Town_mat) {
      materials.Town_mat.roughness = 0.85;
      materials.Town_mat.metalness = 0;
      // Skip expensive PMREM cubemap sampling on matte town pixels
      materials.Town_mat.envMapIntensity = 0;
      if (materials.Town_mat.map) {
        materials.Town_mat.map.anisotropy = 8;
      }
      materials.Town_mat.needsUpdate = true;
    }
  }, [materials]);

  useFrame((state) => {
    const offset = 1 - scroll.offset;
    const r1 = scroll.range(1 / 4, 4 / 4);
    const zoomedIn = offset <= 0.14;

    if (pokeBallTop.current) {
      pokeBallTop.current.rotation.x = MathUtils.lerp(
        pokeBallTop.current.rotation.x,
        -(Math.PI / 2) * rsqw(r1),
        0.2
      );
    }

    const zoomedOutZ = state.viewport.aspect < 1 ? 15.5 : 12.8;
    const t = MathUtils.clamp((offset - 0.14) / 0.86, 0, 1);
    const eased = t * t * (3 - 2 * t);

    const targetCamY = zoomedIn ? 0.4 : 0.25;
    const targetLookY = zoomedIn ? 0.16 : 0.05;
    const targetCamZ = zoomedIn
      ? fullZoomValue
      : MathUtils.lerp(fullZoomValue, zoomedOutZ, eased);

    state.camera.position.y = MathUtils.lerp(
      state.camera.position.y,
      targetCamY,
      0.15
    );
    state.camera.position.z = MathUtils.lerp(
      state.camera.position.z,
      targetCamZ,
      0.2
    );
    lookAtTarget.y = MathUtils.lerp(lookAtTarget.y, targetLookY, 0.15);
    state.camera.lookAt(lookAtTarget);

    const isNowZoomed = offset < 0.14;
    if (isNowZoomed !== prevZoomed.current) {
      prevZoomed.current = isNowZoomed;
      getZoomed(isNowZoomed);
    }

    const isNowZoomedOut = offset > 0.7;
    if (isNowZoomedOut !== prevZoomedOut.current) {
      prevZoomedOut.current = isNowZoomedOut;
      getZoomedOut(isNowZoomedOut);
    }
  });

  return (
    <group ref={group} dispose={null} onScroll={scroll}>
      <pointLight
        position={[0, 1.6, 1.5]}
        intensity={0.9}
        distance={6}
        color="#fef3c7"
      />
      <group name="Scene">
        {mergedTownGeometry && (
          <mesh
            name="MergedTwinleafTown"
            geometry={mergedTownGeometry}
            material={materials.Town_mat}
          />
        )}
        <mesh
          name="PokeballBottom"
          geometry={nodes.PokeballBottom.geometry}
          material={materials.Pokeball_mat}
          position={[0, -2.36, 0]}
          scale={0.01}
        />
        <mesh
          name="PokeballTop"
          ref={pokeBallTop}
          geometry={nodes.PokeballTop.geometry}
          material={materials.Pokeball_mat}
          position={[0, 0.139, -2.131]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/twinleafBall.glb");
