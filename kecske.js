window.addEventListener("load", init);

function init() {
  console.log("hahó");
  var pElem = document.querySelectorAll("footer p")[0]; //html elem
  pElem.innerHTML = "Cs Katalin"; //elem tartalmának megvált.
  //b.	A szöveget igazítsd középre,
  pElem.style.textAlign = "center";
  //a betűméretet állítsd be 20px-re.
  pElem.style.fontSize = "20px";

  /*A képekre kattintva (bármelyik képre kattintunk), */
  var kepTomb = document.querySelectorAll("#bal>p>img");
  console.log(kepTomb);

  for (let index = 0; index < kepTomb.length; index++) {
    kepTomb[index].addEventListener("click", kattintas);
    /**Ha a  képek fölé mozgatva az egeret a képen jelenjen meg  a kiemel stílus!
6.	JS: Ha a képekről elviszem az egeret, akkor a stílus tűnjön el róla. 
 */
    kepTomb[index].addEventListener("mouseover", foleVisz);
    kepTomb[index].addEventListener("mouseout", leVisz);
  }
}

var tomb = [];

function kattintas() {
  console.log(event.target.src); //ki váltotta ki az eseményt

  tomb.push(event.target.src);
  console.log(tomb);
  /*a.	a kép elérési útját (src) mentsd el egy tömbbe (tomb.push(event.target.src))
b.	írd ki a tömb tartalmát a konzolra!*/
  //Amelyik elemre kattintottam, arról leveszem az eseménykezelőt
  event.target.removeEventListener("click", kattintas);
  //A képre kattintva a képet tüntessük el a bal oldalról (display:none;)
  event.target.style.display = "none";
  // és jelenítsük meg a csónak közepén.
  //Ehhez helyezd el az article tagben található div tárolóba a képet!
  var akktKep = "<img src='"+event.target.src+"' alt='' >";
  document.querySelectorAll("#csonak")[0].innerHTML += akktKep;
  var utolsoIndex=document.querySelectorAll("#csonak img").length;
  for (let index = 0; index < utolsoIndex; index++) {
    document.querySelectorAll("#csonak img")[index].addEventListener("mouseover", foleVisz);
    document.querySelectorAll("#csonak img")[index].addEventListener("mouseout", leVisz);  
  }
 
}

function foleVisz(event) {
  // event.target.className="kiemel";
  event.target.classList.add("kiemel");
}
function leVisz() {
  //event.target.className="";
  event.target.classList.remove("kiemel");
}
