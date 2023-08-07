import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { a } from "@react-spring/web";
import Pokeball from "./components/Pokeball";
import Steven from "./components/Steven";
import Galaxy from "./components/Galaxy";

function App() {
  return (
    <a.main>
      <Canvas className="canvas bg-gray-800">
        <ScrollControls pages={2}>
          <ambientLight intensity={2} />

          <Pokeball />
          <Steven />
          <Galaxy />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={false}
          />
        </ScrollControls>
      </Canvas>
    </a.main>
  );
}

export default App;
