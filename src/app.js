/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];

  const adj = ["great", "big"];

  const noun = ["jogger", "racoon"];

  const dom = [".com", ".es", ".net"];

  for (let indexPronoun = 0; indexPronoun < pronoun.length; indexPronoun++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        for (let indexDom = 0; indexDom < dom.length; indexDom++) {
          console.log(
            pronoun[indexPronoun] +
              adj[indexAdj] +
              noun[indexNoun] +
              dom[indexDom]
          );
        }
      }
    }
  }
};
