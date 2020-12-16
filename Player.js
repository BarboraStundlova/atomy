"use strict";

const Player = {}

Player.listen = functon() {
  document.body.addEventListener("click", Player.click)
}

Player.click = function(e) {
  let position = draw.getPosition(e.target)
  if (!position) {
    return
  }
  let x = position[0]
  let y =  position[1]
  Board[x][y]++
  Draw.all()
}