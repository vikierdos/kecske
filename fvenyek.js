window.addEventListener("load", init);
var tomb = [];

var tomb2 = [1, 2, 3, 4, 5, 6, 7];
function init() {
  var szoveg = ujfggveny();
  console.log(szoveg); //string lesz, mert sztring a fvény viszatérési értéke

  var fuggveny2 = function (nev) {
    return "halihó " + nev;
  };
  console.log(fuggveny2); //ez egy függvény!
  console.log(fuggveny2("Béla"));

  /** */
  /*A képekre kattintva (bármelyik képre kattintunk), */
  var kepTomb = document.querySelectorAll("#bal>p>img");
  console.log(kepTomb);

  var kepTomb = document.querySelectorAll("#bal>p>img");
  //névtelen függvény
  //callBack - nem azonnal fut le, hanem amikor valamilyen esemény bekövetkezik.
  kepTomb[0].addEventListener("click", () => {
    console.log(event.target.src);
    tomb.push(event.target.src);
  });

  //**nyíl függvény */
  var fuggveny3 = (nev) => {
    return "halihó " + nev;
  };
  console.log(fuggveny3("Jakab"));

  /** írjuk ki a tömb elemeit a consolra */
  for (let index = 0; index < tomb2.length; index++) {
    console.log(tomb2[index]);
  }

  tomb2.forEach( (elem,index)=> {
    console.log(elem+": "+index);
  });
}

function ujfggveny() {
  return "hello";
}
