//Kiarra

import "./tiles.css";

let dataModel = {
  tiles: {
    productName: "p",
    price: 8
  }
};

/* 
if you are writing code that 
is NOT the value you are going
to show on the screen,
that is an expression
*/
/*
 "Dot Notation" is when you use a dot character
 to pull a property out of an object
 
 on the LEFT side of the dot
 you put the object that contains
 the property you want to access
 
 on the RIGHT side of the dot,
 you put the property name that
 you want to access
*/

export default function Tiles() {
console.log(dataModel.tiles.price)
  return (
    <div className="tiles">
      <div className="tile">
        {1 + 1}
      </div>
    </div>
  );
}
