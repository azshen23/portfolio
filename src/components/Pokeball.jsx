import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
export default function Pokeball({ getZoomed }) {
  const group = useRef();
  const pokeBallTop = useRef();
  const { nodes, materials } = useGLTF("/models/twinleafBall.glb");
  const scroll = useScroll();

  useFrame((state) => {
    const offset = 1 - scroll.offset;
    const r1 = scroll.range(1 / 4, 4 / 4);

    pokeBallTop.current.rotation.x = THREE.MathUtils.lerp(
      pokeBallTop.current.rotation.x,
      -(Math.PI / 2) * rsqw(r1),
      0.2
    );

    state.camera.position.y = 0.25;
    if (offset > 0.125) {
      state.camera.position.z = THREE.MathUtils.lerp(
        state.camera.position.z,
        Math.sin((offset * Math.PI) / 3) * 10,
        0.2
      );
    } else {
      state.camera.position.z = THREE.MathUtils.lerp(
        state.camera.position.z,
        Math.sin((0.125 * Math.PI) / 3) * 10,
        0.2
      );
    }
    state.camera.lookAt(0, 0, 1);

    if (offset < 0.125) {
      getZoomed(true);
    } else {
      getZoomed(false);
    }
  });
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="House01"
          geometry={nodes.House01.geometry}
          material={materials.Town_mat}
          position={[0.609, 0, -0.816]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="House02"
          geometry={nodes.House02.geometry}
          material={materials.Town_mat}
          position={[-0.752, 0, -0.854]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost01"
          geometry={nodes.FencePost01.geometry}
          material={materials.Town_mat}
          position={[0.686, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="Fence"
          geometry={nodes.Fence.geometry}
          material={materials.Town_mat}
          position={[0.739, 0.052, -1.402]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="Tree01"
          geometry={nodes.Tree01.geometry}
          material={materials.Town_mat}
          position={[1.512, 0.001, -0.91]}
          scale={0.01}
        />
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
        <mesh
          name="Mailbox"
          geometry={nodes.Mailbox.geometry}
          material={materials.Town_mat}
          position={[-0.346, 0, -0.572]}
          scale={0.01}
        />
        <mesh
          name="Sign"
          geometry={nodes.Sign.geometry}
          material={materials.Town_mat}
          position={[0.115, 0, -0.212]}
          scale={0.01}
        />
        <mesh
          name="Tree02"
          geometry={nodes.Tree02.geometry}
          material={materials.Town_mat}
          position={[1.621, 0.001, -1.189]}
          scale={0.01}
        />
        <mesh
          name="FencePost02"
          geometry={nodes.FencePost02.geometry}
          material={materials.Town_mat}
          position={[0.724, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="House003"
          geometry={nodes.House003.geometry}
          material={materials.Town_mat}
          position={[-0.729, 0, 0.444]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="House004"
          geometry={nodes.House004.geometry}
          material={materials.Town_mat}
          position={[0.72, 0, 0.389]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="Mailbox001"
          geometry={nodes.Mailbox001.geometry}
          material={materials.Town_mat}
          position={[0.285, 0, 0.676]}
          scale={0.01}
        />
        <mesh
          name="Flower"
          geometry={nodes.Flower.geometry}
          material={materials.Town_mat}
          position={[-0.769, 0.045, -1.507]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="FencePost003"
          geometry={nodes.FencePost003.geometry}
          material={materials.Town_mat}
          position={[0.764, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost004"
          geometry={nodes.FencePost004.geometry}
          material={materials.Town_mat}
          position={[0.801, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost005"
          geometry={nodes.FencePost005.geometry}
          material={materials.Town_mat}
          position={[0.841, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost006"
          geometry={nodes.FencePost006.geometry}
          material={materials.Town_mat}
          position={[0.879, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost007"
          geometry={nodes.FencePost007.geometry}
          material={materials.Town_mat}
          position={[0.919, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost008"
          geometry={nodes.FencePost008.geometry}
          material={materials.Town_mat}
          position={[0.956, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost009"
          geometry={nodes.FencePost009.geometry}
          material={materials.Town_mat}
          position={[0.996, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost010"
          geometry={nodes.FencePost010.geometry}
          material={materials.Town_mat}
          position={[1.034, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost011"
          geometry={nodes.FencePost011.geometry}
          material={materials.Town_mat}
          position={[1.075, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost012"
          geometry={nodes.FencePost012.geometry}
          material={materials.Town_mat}
          position={[1.112, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost013"
          geometry={nodes.FencePost013.geometry}
          material={materials.Town_mat}
          position={[1.154, 0, -1.403]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost014"
          geometry={nodes.FencePost014.geometry}
          material={materials.Town_mat}
          position={[1.081, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost015"
          geometry={nodes.FencePost015.geometry}
          material={materials.Town_mat}
          position={[1.043, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost016"
          geometry={nodes.FencePost016.geometry}
          material={materials.Town_mat}
          position={[1.003, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost017"
          geometry={nodes.FencePost017.geometry}
          material={materials.Town_mat}
          position={[0.966, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost018"
          geometry={nodes.FencePost018.geometry}
          material={materials.Town_mat}
          position={[0.926, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost019"
          geometry={nodes.FencePost019.geometry}
          material={materials.Town_mat}
          position={[0.888, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost020"
          geometry={nodes.FencePost020.geometry}
          material={materials.Town_mat}
          position={[0.848, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost021"
          geometry={nodes.FencePost021.geometry}
          material={materials.Town_mat}
          position={[1.158, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost022"
          geometry={nodes.FencePost022.geometry}
          material={materials.Town_mat}
          position={[0.81, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost023"
          geometry={nodes.FencePost023.geometry}
          material={materials.Town_mat}
          position={[0.77, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost024"
          geometry={nodes.FencePost024.geometry}
          material={materials.Town_mat}
          position={[0.732, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost025"
          geometry={nodes.FencePost025.geometry}
          material={materials.Town_mat}
          position={[0.691, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost026"
          geometry={nodes.FencePost026.geometry}
          material={materials.Town_mat}
          position={[1.121, 0, -1.737]}
          scale={0.01}
        />
        <mesh
          name="FencePost027"
          geometry={nodes.FencePost027.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.516]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost028"
          geometry={nodes.FencePost028.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.479]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost029"
          geometry={nodes.FencePost029.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.439]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost030"
          geometry={nodes.FencePost030.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.433]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost031"
          geometry={nodes.FencePost031.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.473]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost032"
          geometry={nodes.FencePost032.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.51]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost033"
          geometry={nodes.FencePost033.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.55]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost034"
          geometry={nodes.FencePost034.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.594]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost035"
          geometry={nodes.FencePost035.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.588]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost036"
          geometry={nodes.FencePost036.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.629]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost037"
          geometry={nodes.FencePost037.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.666]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost038"
          geometry={nodes.FencePost038.geometry}
          material={materials.Town_mat}
          position={[0.665, 0, -1.708]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost039"
          geometry={nodes.FencePost039.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.556]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost040"
          geometry={nodes.FencePost040.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.708]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost041"
          geometry={nodes.FencePost041.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.671]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost042"
          geometry={nodes.FencePost042.geometry}
          material={materials.Town_mat}
          position={[1.184, 0, -1.631]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="Fence001"
          geometry={nodes.Fence001.geometry}
          material={materials.Town_mat}
          position={[-0.761, 0.052, -1.74]}
          scale={0.01}
        />
        <mesh
          name="FencePost043"
          geometry={nodes.FencePost043.geometry}
          material={materials.Town_mat}
          position={[-0.785, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost044"
          geometry={nodes.FencePost044.geometry}
          material={materials.Town_mat}
          position={[-0.823, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost045"
          geometry={nodes.FencePost045.geometry}
          material={materials.Town_mat}
          position={[-0.863, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost046"
          geometry={nodes.FencePost046.geometry}
          material={materials.Town_mat}
          position={[-0.9, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost047"
          geometry={nodes.FencePost047.geometry}
          material={materials.Town_mat}
          position={[-0.94, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost048"
          geometry={nodes.FencePost048.geometry}
          material={materials.Town_mat}
          position={[-0.978, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost049"
          geometry={nodes.FencePost049.geometry}
          material={materials.Town_mat}
          position={[-1.018, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost050"
          geometry={nodes.FencePost050.geometry}
          material={materials.Town_mat}
          position={[-0.708, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost051"
          geometry={nodes.FencePost051.geometry}
          material={materials.Town_mat}
          position={[-1.056, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost052"
          geometry={nodes.FencePost052.geometry}
          material={materials.Town_mat}
          position={[-1.096, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost053"
          geometry={nodes.FencePost053.geometry}
          material={materials.Town_mat}
          position={[-1.134, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost054"
          geometry={nodes.FencePost054.geometry}
          material={materials.Town_mat}
          position={[-1.175, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost055"
          geometry={nodes.FencePost055.geometry}
          material={materials.Town_mat}
          position={[-1.102, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost056"
          geometry={nodes.FencePost056.geometry}
          material={materials.Town_mat}
          position={[-1.065, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost057"
          geometry={nodes.FencePost057.geometry}
          material={materials.Town_mat}
          position={[-1.025, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost058"
          geometry={nodes.FencePost058.geometry}
          material={materials.Town_mat}
          position={[-0.987, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost059"
          geometry={nodes.FencePost059.geometry}
          material={materials.Town_mat}
          position={[-0.947, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost060"
          geometry={nodes.FencePost060.geometry}
          material={materials.Town_mat}
          position={[-0.91, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost061"
          geometry={nodes.FencePost061.geometry}
          material={materials.Town_mat}
          position={[-0.745, 0, -1.738]}
          scale={0.01}
        />
        <mesh
          name="FencePost062"
          geometry={nodes.FencePost062.geometry}
          material={materials.Town_mat}
          position={[-0.87, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost063"
          geometry={nodes.FencePost063.geometry}
          material={materials.Town_mat}
          position={[-1.18, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost064"
          geometry={nodes.FencePost064.geometry}
          material={materials.Town_mat}
          position={[-0.832, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost065"
          geometry={nodes.FencePost065.geometry}
          material={materials.Town_mat}
          position={[-0.791, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost066"
          geometry={nodes.FencePost066.geometry}
          material={materials.Town_mat}
          position={[-0.754, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost067"
          geometry={nodes.FencePost067.geometry}
          material={materials.Town_mat}
          position={[-0.712, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost068"
          geometry={nodes.FencePost068.geometry}
          material={materials.Town_mat}
          position={[-1.142, 0, -1.404]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.01}
        />
        <mesh
          name="FencePost069"
          geometry={nodes.FencePost069.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.625]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost070"
          geometry={nodes.FencePost070.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.663]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost071"
          geometry={nodes.FencePost071.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.703]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost072"
          geometry={nodes.FencePost072.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.709]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost073"
          geometry={nodes.FencePost073.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.669]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost074"
          geometry={nodes.FencePost074.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.631]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost075"
          geometry={nodes.FencePost075.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.592]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost076"
          geometry={nodes.FencePost076.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.548]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost077"
          geometry={nodes.FencePost077.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.554]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost078"
          geometry={nodes.FencePost078.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.513]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost079"
          geometry={nodes.FencePost079.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.475]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost080"
          geometry={nodes.FencePost080.geometry}
          material={materials.Town_mat}
          position={[-0.687, 0, -1.434]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost081"
          geometry={nodes.FencePost081.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.585]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost082"
          geometry={nodes.FencePost082.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.433]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost083"
          geometry={nodes.FencePost083.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.471]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="FencePost084"
          geometry={nodes.FencePost084.geometry}
          material={materials.Town_mat}
          position={[-1.205, 0, -1.511]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.01}
        />
        <mesh
          name="Flower001"
          geometry={nodes.Flower001.geometry}
          material={materials.Town_mat}
          position={[-0.867, 0.045, -1.506]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="Flower002"
          geometry={nodes.Flower002.geometry}
          material={materials.Town_mat}
          position={[-0.97, 0.045, -1.506]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="Flower003"
          geometry={nodes.Flower003.geometry}
          material={materials.Town_mat}
          position={[-0.769, 0.045, -1.645]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="Flower004"
          geometry={nodes.Flower004.geometry}
          material={materials.Town_mat}
          position={[-0.96, 0.045, -1.645]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="Flower005"
          geometry={nodes.Flower005.geometry}
          material={materials.Town_mat}
          position={[-1.05, 0.045, -1.645]}
          rotation={[Math.PI, 0, 2.983]}
          scale={0.01}
        />
        <mesh
          name="Tree003"
          geometry={nodes.Tree003.geometry}
          material={materials.Town_mat}
          position={[1.33, 0.001, -1.526]}
          scale={0.01}
        />
        <mesh
          name="Tree004"
          geometry={nodes.Tree004.geometry}
          material={materials.Town_mat}
          position={[1.361, 0.001, -1.247]}
          scale={0.01}
        />
        <mesh
          name="Tree005"
          geometry={nodes.Tree005.geometry}
          material={materials.Town_mat}
          position={[1.588, 0.001, -0.613]}
          scale={0.01}
        />
        <mesh
          name="Tree006"
          geometry={nodes.Tree006.geometry}
          material={materials.Town_mat}
          position={[1.898, 0.001, -0.304]}
          scale={0.01}
        />
        <mesh
          name="Tree007"
          geometry={nodes.Tree007.geometry}
          material={materials.Town_mat}
          position={[1.898, 0.001, 0.005]}
          scale={0.01}
        />
        <mesh
          name="Tree008"
          geometry={nodes.Tree008.geometry}
          material={materials.Town_mat}
          position={[1.588, 0.001, 0.314]}
          scale={0.01}
        />
        <mesh
          name="Tree009"
          geometry={nodes.Tree009.geometry}
          material={materials.Town_mat}
          position={[1.588, 0.001, 0.622]}
          scale={0.01}
        />
        <mesh
          name="Tree010"
          geometry={nodes.Tree010.geometry}
          material={materials.Town_mat}
          position={[1.745, 0.001, 0.94]}
          scale={0.01}
        />
        <mesh
          name="Tree011"
          geometry={nodes.Tree011.geometry}
          material={materials.Town_mat}
          position={[1.869, 0.001, 0.635]}
          scale={0.01}
        />
        <mesh
          name="Tree012"
          geometry={nodes.Tree012.geometry}
          material={materials.Town_mat}
          position={[1.891, 0.001, 0.321]}
          scale={0.01}
        />
        <mesh
          name="Tree013"
          geometry={nodes.Tree013.geometry}
          material={materials.Town_mat}
          position={[1.573, 0.001, 1.224]}
          scale={0.01}
        />
        <mesh
          name="Tree014"
          geometry={nodes.Tree014.geometry}
          material={materials.Town_mat}
          position={[1.38, 0.001, 1.464]}
          scale={0.01}
        />
        <mesh
          name="Tree015"
          geometry={nodes.Tree015.geometry}
          material={materials.Town_mat}
          position={[1.604, 0.001, -0.311]}
          scale={0.01}
        />
        <mesh
          name="Tree016"
          geometry={nodes.Tree016.geometry}
          material={materials.Town_mat}
          position={[1.591, 0.001, 0.017]}
          scale={0.01}
        />
        <mesh
          name="Tree017"
          geometry={nodes.Tree017.geometry}
          material={materials.Town_mat}
          position={[1.895, 0.001, -0.604]}
          scale={0.01}
        />
        <mesh
          name="Tree018"
          geometry={nodes.Tree018.geometry}
          material={materials.Town_mat}
          position={[1.803, 0.001, -0.889]}
          scale={0.01}
        />
        <mesh
          name="Tree019"
          geometry={nodes.Tree019.geometry}
          material={materials.Town_mat}
          position={[1.129, 0.001, 1.658]}
          scale={0.01}
        />
        <mesh
          name="Tree020"
          geometry={nodes.Tree020.geometry}
          material={materials.Town_mat}
          position={[0.842, 0.001, 1.756]}
          scale={0.01}
        />
        <mesh
          name="Tree021"
          geometry={nodes.Tree021.geometry}
          material={materials.Town_mat}
          position={[0.904, 0.001, 1.461]}
          scale={0.01}
        />
        <mesh
          name="Tree022"
          geometry={nodes.Tree022.geometry}
          material={materials.Town_mat}
          position={[1.257, 0.001, 1.211]}
          scale={0.01}
        />
        <mesh
          name="Tree023"
          geometry={nodes.Tree023.geometry}
          material={materials.Town_mat}
          position={[1.456, 0.001, 0.931]}
          scale={0.01}
        />
        <mesh
          name="Tree024"
          geometry={nodes.Tree024.geometry}
          material={materials.Town_mat}
          position={[0.651, 0.001, -1.877]}
          scale={0.01}
        />
        <mesh
          name="Tree025"
          geometry={nodes.Tree025.geometry}
          material={materials.Town_mat}
          position={[0.37, 0.001, -1.948]}
          scale={0.01}
        />
        <mesh
          name="Tree026"
          geometry={nodes.Tree026.geometry}
          material={materials.Town_mat}
          position={[-0.325, 0.001, -1.971]}
          scale={0.01}
        />
        <mesh
          name="Tree027"
          geometry={nodes.Tree027.geometry}
          material={materials.Town_mat}
          position={[-0.621, 0.001, -1.878]}
          scale={0.01}
        />
        <mesh
          name="Tree028"
          geometry={nodes.Tree028.geometry}
          material={materials.Town_mat}
          position={[-1.377, 0.001, -1.454]}
          scale={0.01}
        />
        <mesh
          name="Tree029"
          geometry={nodes.Tree029.geometry}
          material={materials.Town_mat}
          position={[-1.377, 0.001, -1.161]}
          scale={0.01}
        />
        <mesh
          name="Tree030"
          geometry={nodes.Tree030.geometry}
          material={materials.Town_mat}
          position={[-1.771, 0.001, -0.861]}
          scale={0.01}
        />
        <mesh
          name="Tree031"
          geometry={nodes.Tree031.geometry}
          material={materials.Town_mat}
          position={[-1.853, 0.001, -0.555]}
          scale={0.01}
        />
        <mesh
          name="Tree032"
          geometry={nodes.Tree032.geometry}
          material={materials.Town_mat}
          position={[-1.559, 0.001, -0.595]}
          scale={0.01}
        />
        <mesh
          name="Tree033"
          geometry={nodes.Tree033.geometry}
          material={materials.Town_mat}
          position={[-1.927, 0.001, 0.039]}
          scale={0.01}
        />
        <mesh
          name="Tree034"
          geometry={nodes.Tree034.geometry}
          material={materials.Town_mat}
          position={[-1.634, 0.001, 0.243]}
          scale={0.01}
        />
        <mesh
          name="Tree035"
          geometry={nodes.Tree035.geometry}
          material={materials.Town_mat}
          position={[-1.355, 0.001, 1.045]}
          scale={0.01}
        />
        <mesh
          name="Tree036"
          geometry={nodes.Tree036.geometry}
          material={materials.Town_mat}
          position={[-1.63, 0.001, -1.149]}
          scale={0.01}
        />
        <mesh
          name="Tree038"
          geometry={nodes.Tree038.geometry}
          material={materials.Town_mat}
          position={[-0.908, 0.001, 1.477]}
          scale={0.01}
        />
        <mesh
          name="Tree039"
          geometry={nodes.Tree039.geometry}
          material={materials.Town_mat}
          position={[-1.149, 0.001, 1.637]}
          scale={0.01}
        />
        <mesh
          name="Tree040"
          geometry={nodes.Tree040.geometry}
          material={materials.Town_mat}
          position={[-1.466, 0.001, -0.88]}
          scale={0.01}
        />
        <mesh
          name="Tree041"
          geometry={nodes.Tree041.geometry}
          material={materials.Town_mat}
          position={[-1.713, 0.001, 1.025]}
          scale={0.01}
        />
        <mesh
          name="Tree042"
          geometry={nodes.Tree042.geometry}
          material={materials.Town_mat}
          position={[-1.913, 0.001, -0.276]}
          scale={0.01}
        />
        <mesh
          name="Tree043"
          geometry={nodes.Tree043.geometry}
          material={materials.Town_mat}
          position={[-1.614, 0.001, -0.346]}
          scale={0.01}
        />
        <mesh
          name="Tree044"
          geometry={nodes.Tree044.geometry}
          material={materials.Town_mat}
          position={[-1.642, 0.001, -0.056]}
          scale={0.01}
        />
        <mesh
          name="Tree045"
          geometry={nodes.Tree045.geometry}
          material={materials.Town_mat}
          position={[-1.896, 0.001, 0.385]}
          scale={0.01}
        />
        <mesh
          name="Tree046"
          geometry={nodes.Tree046.geometry}
          material={materials.Town_mat}
          position={[-1.592, 0.001, 0.53]}
          scale={0.01}
        />
        <mesh
          name="Tree047"
          geometry={nodes.Tree047.geometry}
          material={materials.Town_mat}
          position={[-1.82, 0.001, 0.736]}
          scale={0.01}
        />
        <mesh
          name="Tree048"
          geometry={nodes.Tree048.geometry}
          material={materials.Town_mat}
          position={[-1.503, 0.001, 0.815]}
          scale={0.01}
        />
        <mesh
          name="Tree049"
          geometry={nodes.Tree049.geometry}
          material={materials.Town_mat}
          position={[-1.565, 0.001, 1.25]}
          scale={0.01}
        />
        <mesh
          name="Tree050"
          geometry={nodes.Tree050.geometry}
          material={materials.Town_mat}
          position={[-1.15, 0.001, 1.308]}
          scale={0.01}
        />
        <mesh
          name="Tree051"
          geometry={nodes.Tree051.geometry}
          material={materials.Town_mat}
          position={[-1.39, 0.001, 1.464]}
          scale={0.01}
        />
        <mesh
          name="Tree052"
          geometry={nodes.Tree052.geometry}
          material={materials.Town_mat}
          position={[-0.807, 0.001, 1.752]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/twinleafBall.glb");
