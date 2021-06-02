//Kiarra

import "./tiles.css";

let dataModel = {
  tiles: [
    {
      productName: "microwave",

      price: 40
    },
    {
      productName: "coffeemaker",
      price: 50
    },

    {
      productName: "shirt",
      price: 20
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

function example(fruit) {
  // function name
  // params (a.k.a. "function signature" -- this is where you name your params
} // function body

example("orange");
example("apple");

// This is your Component "declaration" -- here you explain what your components is with code
function Item(props) {
  let test = {
    example: "object contents"
  };
  console.log(test.example);

  // below are console logs showing your CUSTOM props!
  // to get things "out" of props, use "dot notation"
  // price lives INSIDE of props
  console.log(props.price);
  // product lives INSIDE of props
  console.log(props.product);

  // React will give you a param named "props" which is an object
  // THIS IS A REACT *FUNCTION* COMPONENT
  /*
    everything is trapped in the func,
    until you return it to whoever called it
  */
  return (
    // whatever we "return" will be what "renders" on the screen
    <div className="tile">
      {/* prod ADD the product name here :-) */}
      <div className="pricebox">{props.price}</div>
    </div>
  );
}

function Tiles() {
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
      {/* this is an img "TAG" */}
      <img // tag "name" -- the part at the beginning of your "element"/"component"
        // below are 2 html "attributes"
        // 1) "alt"
        // 2) "style"
        alt="this is just for example"
        style={{ display: "none" }}
        // in React, they use the name "props" when they mean "attributes"
      />
      {/* PUT A COMPONENT HERE */}

      {/* these are INSTANCES of the "ITEM" component*/}
      <Item product="test" price={dataModel.tiles[0].price} />
      <Item price={dataModel.tiles[1].price} />
      <Item price={dataModel.tiles[2].price} />

      {/* PUT A COMPONENT HERE */}
    </div>
  );
}

export default Tiles;
