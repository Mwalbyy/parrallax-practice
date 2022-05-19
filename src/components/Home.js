import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HomeArt from "./HomeArt";

export default function Home() {
  return (
    <>
      <Parallax pages={6}>

        <HomeArt/>
        
        <ParallaxLayer
          speed={1}
          offset={0.99}
          factor={3}
          style={{ backgroundColor: "#1d0c30" }}
          sticky={{ start: 1, end: 3 }}
        >
          <div className="centerContainer">
            <h1 className="articleHead">This is a parallax</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
