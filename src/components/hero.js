import "./hero.css";
//Mekdes
/**
 * data types
 * strings
 * numbers
 * arrays
 * objects
 *
 * inside an object switch = with :
 */
let dataModel = {
  hero: {
    header: "Your <br>perfect<br> patio",
    buttonText: "Patio & Garden",
    subtitle: "Outdoor looks in favorite styles"
  }
};

console.log(dataModel.hero[0]);
var header = dataModel.hero.header;
var buttonText = dataModel.hero.buttonText;
var subtitle = dataModel.hero.subtitle;
export default function Hero() {
  function formoreinfo() {
    console.log("give more info");
  }
  return (
    <div className="hero">
      <div className="background">
        <div className="title">
          Your
          <br />
          perfect
          <br /> patio
        </div>
        <div className="caption">
          Outdoor looks in <br />
          favorite styles
        </div>
        <div className="square" onClick={formoreinfo}>
          {buttonText}
        </div>
      </div>
    </div>
  );
}
