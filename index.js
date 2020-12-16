"use strict"
const table = document.querySelector("table")
      for (let i = 0; i<6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j<6; j++){
      const cell = document.createElement("td")
      row.appendChild(cell)}
      table.appendChild(row)
      }

      document.addEventListener("click", function(e) {
        let node = e.target
        if (node.nodeName == "TD") {
          update(node)}})
          let update = function(cell) {
            cell.innerHTML += "o"
          }

       