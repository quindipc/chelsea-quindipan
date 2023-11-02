import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 70 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollManager section={section} onSectionChange={setSection} />
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
