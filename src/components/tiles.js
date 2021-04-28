//Kiarra

import "./tiles.css";

let dataModel = {
  tiles: [
    {
      productName: "microwave",

      price: 1
    },
    {
      productName: "coffeemaker",
      price: 2
    }
  ]
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
  var tile1 = dataModel.tiles[0];
  var tile2 = dataModel.tiles[1];
  var theNameOfTheThingWeNeed = "price";

  console.log(
    "price 1",
    tile1.price,
    "price 2",
    tile2["price"],
    "price 2",
    tile2[theNameOfTheThingWeNeed]
  );

  return (
    <div className="tiles">
      <div className="tile">
        <div className="pricebox">{dataModel.tiles[0].price}</div>
      </div>
    </div>
  );
}
