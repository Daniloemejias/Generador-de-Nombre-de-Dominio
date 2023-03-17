/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
//write your code here
var pronoun = ["the", "our", "they", "your", "it", "mine"];
var adj = ["great", "big", "handsome", "happy", "bitter", "deep", "dry"];
var noun = ["jogger", "racoon", "sushi", "hole", "frog", "games", "jacket"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(i);
      console.log(j);
      console.log(k);
      document.writeln(pronoun[i] + adj[j] + noun[k] + ".com" + "<br/>");
    }
  }
}
