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

// console.log(dataModel.hero[0]);
var header = dataModel.hero.header;
var buttonText = dataModel.hero.buttonText;
var subtitle = dataModel.hero.subtitle;
export default function Hero(props) {
  console.log(props.sender);
  function formoreinfo() {
    console.log("give more info");
console.log(props.subTitle);
console.log(props.buttonText);
  }
  return (
    <div className="hero">
      <div className="background">
        <div className="title">
          <span dangerouslySetInnerHTML={{ __html: props.sender }} />
        </div>
        <div className="caption">
          Outdoor looks in <br />
          favorite styles
          <span dangerouslySetInnerHTML={{ __html: props.subTitle }} />
        </div>
        <div className="square" onClick={formoreinfo}>
          {buttonText}
          <span dangerouslySetInnerHTML={{ __html: props.buttonText }} />
        </div>
      </div>
    </div>
  );
}
