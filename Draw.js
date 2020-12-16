"use strict";

const Draw = {}

Draw.all = function() {
  let html = "<table>"
  for (let i = 0; i<Board.length; i ++) {
    html += "<tr>"
    for (let j= 0; j<Board.length; j++) {
      html += "<td>"
      html += Draw.atoms(Bard[j][i])
      html += "<td>"
    }
    html +="<tr>"
  }
  html+="<table>"
  document.body.innerHTML = html
}

Draw.atoms =  function(count) {
  let result = ""
  for (let i = 0; i < count; i++) {
    result += "o"
  }
  return result
}