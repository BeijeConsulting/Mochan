var gameCounter = 0;
var player
var arr = [];



function press(cell) {
    if (player == 1) {
        player = -1
    } else {
        player = 1
    }
    switch(cell) {
        case 0:
            arr[0][0] = player;
            if (player == 1) {
                document.getElementById('c1').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c1').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c1').removeAttribute("onmousedown")
            break
        case 1:
            arr[0][1] = player;
            if (player == 1) {
                document.getElementById('c2').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c2').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c2').removeAttribute("onmousedown")
            break
        case 2:
            arr[0][2] = player;
            if (player == 1) {
                document.getElementById('c3').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c3').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c3').removeAttribute("onmousedown")
            break
        case 3:
            arr[1][0] = player;
            if (player == 1) {
                document.getElementById('c4').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c4').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c4').removeAttribute("onmousedown")
            break
        case 4:
            arr[1][1] = player;
            if (player == 1) {
                document.getElementById('c5').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c5').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c5').removeAttribute("onmousedown")
            break
        case 5:
            arr[1][2] = player;
            if (player == 1) {
                document.getElementById('c6').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c6').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c6').removeAttribute("onmousedown")
            break
        case 6:
            arr[2][0] = player;
            if (player == 1) {
                document.getElementById('c7').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c7').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c7').removeAttribute("onmousedown")
            break
        case 7:
            arr[2][1] = player;
            if (player == 1) {
                document.getElementById('c8').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c8').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c8').removeAttribute("onmousedown")
            break
        case 8:
            arr[2][2] = player;
            if (player == 1) {
                document.getElementById('c9').style.backgroundColor = "#0000FF"
            } else {
                document.getElementById('c9').style.backgroundColor = "#FF0000"
            }
            document.getElementById('c9').removeAttribute("onmousedown")
            break
        default:
            break;
    }
    gameCounter++
    isWinner()
}


function createArray() {
    for (i=0;i<3;i++) {
        arr[i] = [0,0,0]
    }
    randPlayer = Math.random()
    if (randPlayer > 0.5) {
        randPlayer = 1
    } else {
        randPlayer = -1
    }
    console.log(randPlayer)
    player = randPlayer
}

function isWinner() {
    let row1 = arr[0][0] + arr [0][1] + arr[0][2];
    let row2 = arr[1][0] + arr[1][1] + arr[1][2];
    let row3 = arr[2][0] + arr[2][1] + arr[2][2];
    let col1 = arr[0][0] + arr[1][0] + arr[2][0];
    let col2 = arr[0][1] + arr[1][1] + arr[2][1];
    let col3 = arr[0][2] + arr[1][2] + arr[2][2];
    let diag1 = arr[0][0] + arr[1][1] + arr[2][2];
    let diag2 = arr[0][2] + arr[1][1] + arr[2][0];
    console.log(row1, row2, row3, col1, col2, col3, diag1, diag2)
    if (row1 == 3) {winnerPrize(3, 'row1')}
    if (row2 == 3) {winnerPrize(3, 'row2')}
    if (row3 == 3) {winnerPrize(3, 'row3')}
    if (col1 == 3) {winnerPrize(3, 'col1')}
    if (col2 == 3) {winnerPrize(3, 'col2')}
    if (col3 == 3) {winnerPrize(3, 'col3')}
    if (diag1 == 3) {winnerPrize(3, 'diag1')}
    if (diag2 == 3) {winnerPrize(3, 'diag2')}

    if (row1 == -3) {winnerPrize(-3, 'row1')}
    if (row2 == -3) {winnerPrize(-3, 'row2')}
    if (row3 == -3) {winnerPrize(-3, 'row3')}
    if (col1 == -3) {winnerPrize(-3, 'col1')}
    if (col2 == -3) {winnerPrize(-3, 'col2')}
    if (col3 == -3) {winnerPrize(-3, 'col3')}
    if (diag1 == -3) {winnerPrize(-3, 'diag1')}
    if (diag2 == -3) {winnerPrize(-3, 'diag2')}
    if (gameCounter == 9) {document.getElementById('container').innerHTML = '<h1>Pareggio</h1>'}
    // if (row1 == 3 || row2 ==3 || row3 ==3 || col1 ==3 || col2 ==3 || col3 ==3 || diag1 ==3 || diag2 == 3) {
    //     document.getElementById('container').innerHTML = '<h1 class="blu">Blu vince</h1>'
    //
    // } else if (row1 == -3 || row2 == -3 || row3 == -3 || col1 == -3 || col2 == -3 || col3 == -3 || diag1 == -3 || diag2 == -3) {
    //     document.getElementById('container').innerHTML = '<h1 class="rosso">Rosso vince</h1>'
    // } else if (gameCounter == 9) {
    //     document.getElementById('container').innerHTML = '<h1>Pareggio</h1>'
    // }
}

function winnerPrize(punt, pos) {
  console.log(punt, pos)
    if (punt == 3) {
    document.getElementById('container').innerHTML = '<h1 class="blu">Blu vince</h1>'
  } else {
    document.getElementById('container').innerHTML = '<h1 class="rosso">Rosso vince</h1>'
  }
  switch(pos) {
      case "row1":
          document.getElementById("c1").classList.add("pulse")
          document.getElementById("c2").classList.add("pulse")
          document.getElementById("c3").classList.add("pulse")
          break
    case "row2":
        document.getElementById("c4").classList.add("pulse")
        document.getElementById("c5").classList.add("pulse")
        document.getElementById("c6").classList.add("pulse")
        break
    case "row3":
        document.getElementById("c7").classList.add("pulse")
        document.getElementById("c8").classList.add("pulse")
        document.getElementById("c9").classList.add("pulse")
        break
    case "col1":
        document.getElementById("c1").classList.add("pulse")
        document.getElementById("c4").classList.add("pulse")
        document.getElementById("c7").classList.add("pulse")
        break
    case "col2":
        document.getElementById("c2").classList.add("pulse")
        document.getElementById("c5").classList.add("pulse")
        document.getElementById("c8").classList.add("pulse")
        break
    case "col3":
        document.getElementById("c3").classList.add("pulse")
        document.getElementById("c6").classList.add("pulse")
        document.getElementById("c9").classList.add("pulse")
        break
    case "diag1":
        document.getElementById("c1").classList.add("pulse")
        document.getElementById("c5").classList.add("pulse")
        document.getElementById("c9").classList.add("pulse")
        break
    case "diag2":
        document.getElementById("c3").classList.add("pulse")
        document.getElementById("c5").classList.add("pulse")
        document.getElementById("c7").classList.add("pulse")
        break
  }
}

function nuovoGioco() {
    gameCounter = 0;
    createArray()
    let arrcell = ["c1", "c2", "c3", "c4", "c5","c6","c7","c8","c9"]
    for (i=0;i<arrcell.length;i++) {
        let DOMel =document.getElementById(arrcell[i])
        DOMel.removeAttribute("style")
        DOMel.classList.remove("pulse")
        DOMel.setAttribute("onmousedown", "press(" + i + ")")
    }
    document.getElementById("container").innerHTML = "__________"

}

function colorChoice(el) {
    console.log(player)
    if (player == -1) {
        el.classList.add("btnblue")
        el.classList.remove("btnred")
    } else if (player == 1){
        el.classList.add("btnred")
        el.classList.remove("btnblue")
    }
}
