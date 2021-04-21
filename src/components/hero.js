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
  hero:{ 
    header: "Your perfect patio", 
    buttonText: "Patio and Garden",
    subtitle: "Outdoor looks in favorite stylese"
  }
  };

console.log(dataModel.hero[0]);
var header= dataModel.hero.header
var buttonText= dataModel.hero.buttonText
var subtitle= dataModel.hero.subtitle
export default function Hero() {
  return (
    <div className="hero">
      <h1>{header}</h1>
      <h2></h2>
    </div>
  );
}
