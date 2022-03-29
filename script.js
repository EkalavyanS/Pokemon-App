var UserInput = document.querySelector("#pokemon-name-input");
var userInputValue;
var data;
function main() {
  userInputValue = UserInput.value;
  fetch("https://pokeapi.co/api/v2/pokemon/" + userInputValue)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").innerText = "Name:" + data["name"];
      document.getElementById("pokemon-image").src =
        data["sprites"]["other"]["official-artwork"]["front_default"]
      var abilities = [];
      for (var i = 0; i < data["abilities"].length; i++) {
        abilities.push(data["abilities"][i]["ability"]["name"]);
      }
      console.log(abilities);
      var abilitiestag = document.getElementById("ability-pokemon")
      abilitiestag.innerText =
      "Abilities:" + abilities.join(", ");
      abilitiestag.style.fontWeight = "bold";
      var moves = []
      for (var i=0; i<data["moves"].length; i++) {
        moves.push(data["moves"][i]["move"]["name"])  
      }
      console.log(moves);
      var strmove = "Moves:" + moves.join(", ")
      var movetag = document.getElementById("moves-pokemon") 
      movetag.innerText = strmove 
      movetag.style.fontWeight = "bold"
      var types = []
      for (var i=0; i<data["types"].length; i++) {
        types.push(data["types"][i]["type"]["name"])  
      }
      var strtype = "Type:" + types.join(", ")
      var typetag = document.getElementById("type-pokemon") 
      typetag.innerText = strtype
      typetag.style.fontWeight = "bold" 
    });
}
