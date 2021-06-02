import { useState } from "react";
import Hero from "./components/hero";
import Tiles from "./components/tiles";
import "./styles.css";
import targetPic from "../src/public/target.png";

export default function App() {
const showBoxState= useState(false)
//peice of state
const showBox= showBoxState[0]
const setShowBox= showBoxState[1]
 //const [showBox, setShowBox] = useState(false);
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
          showPopup={() => {
            console.log("hello");
            setShowBox(!showBox)
//peice of state
          }}
        />
        <Tiles />
       { showBox && 
 <div className="Popup">
<button onClick={() => {
            console.log("hello");
            setShowBox(false)
          }}>x</button>
 </div>
       }
      </div>
    </div>
  );
}
