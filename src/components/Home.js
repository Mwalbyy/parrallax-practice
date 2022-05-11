import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layerOne from "../images/Layer1.png";
import layerTwo from "../images/Layer2.png";
import layerThree from "../images/Layer3.png";

export default function Home() {
  return (
    <>
      <Parallax pages={6}>
        <h1>hello</h1>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${layerOne})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent,90%, #1d0c30), url(${layerTwo})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={.99}
          factor={3}

          style={{ backgroundColor: "#1d0c30" }}
        ></ParallaxLayer>
      </Parallax>
    </>
  );
}
