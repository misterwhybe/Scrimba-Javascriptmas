function getReadyTables() {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return readyTables
}

function displayTables(){
    return getReadyTables().map(type => `<div  class = 'table' >${type}</div>`).join('')
  }

document.getElementById("tables").innerHTML = displayTables()