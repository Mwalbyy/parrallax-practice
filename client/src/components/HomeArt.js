import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layerOne from "../images/Layer1.png";
import layerTwo from "../images/Layer2.png";
import layerThree from "../images/Layer3.png";
import layerFour from "../images/layer4.png";

export default function HomeArt() {
  return (
    <>
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
        speed={1.5}
        factor={1}
        style={{
          backgroundImage: `url(${layerThree})`,
          marginLeft: "40%",
          marginTop: "10%",
          backgroundSize: "15%",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.9}
        factor={1}
        style={{
          backgroundImage: `url(${layerFour})`,
          marginLeft: "70%",
          marginTop: "20%",
          backgroundSize: "10%",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.7}
        factor={1}
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent,90%, #1d0c30), url(${layerTwo})`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        speed={0.5}
        offset={0.99}
        factor={3}
        style={{ backgroundColor: "#1d0c30" }}
      ></ParallaxLayer>
    </>
  );
}
