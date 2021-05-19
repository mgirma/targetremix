import Hero from "./components/hero";
import Tiles from "./components/tiles";
import "./styles.css";
import targetPic from "../src/public/target.png";

export default function App() {
  var herodata={
    header: "Your <br>perfect<br> patio",
    buttonText: "Patio & Garden",
    subTitle: "Outdoor looks in favorite styles"
  }
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
        <Hero
          sender="Your <br>perfect<br> patio"
          subTitle= "Outdoor looks in favorite styles"
          buttonText= "Patio & Garden"
        />
        <Tiles />
      </div>
    </div>
  );
}
