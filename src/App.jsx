import { useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion"
import { Leva } from "leva";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <MotionConfig transition={{
        type: "spring",
        mass: 5,
      stiffness:50,damping: 50,restDelta: 0.0001}}>
    <Canvas shadows camera={{ position: [-10, 3, 0], fov: 30 }}>
    {/* <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}> */}
        <color attach="background" args={["#e6e7ff"]} />
        <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
          <Experience section={section} />
            </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
