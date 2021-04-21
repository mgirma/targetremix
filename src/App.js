import Hero from "./components/hero";
import Tiles from "./components/tiles";
import "./styles.css";
import targetPic from "../src/public/target.png";

export default function App() {
  return (
    <div className="App">
      <img id="tracingImage" src={targetPic} alt="cat" />
      {/*
        Good Job today team! - Edgar
        Thank you for committing the code!

        ****
        You both can type here
        ****


        
      */}
      <div className="tracingPlaceholder">
        <Hero />
        <Tiles />
      </div>
    </div>
  );
}
