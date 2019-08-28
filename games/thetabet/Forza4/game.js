var indexpos = 0
var victory = false
var pg = document.getElementById('posizione')
var griglia = document.getElementById('griglia')
var id = []
var player = 1
var rowstatus = [6,6,6,6,6,6,6,6]
for (i=0;i<8;i++) {
  id[i] = "posizione" + i
}

var arr = []
for (i=0;i<7;i++) {
    arr[i] = [0,0,0,0,0,0,0,0]
}

document.onkeydown = targetPress

function targetPress(key) {
    key = key || window.event;
    let keycode = key.keyCode;
    console.log(keycode);
    movePg(keycode)

};

function movePg(e) {
    if (victory === false) {
 if (e == 37) {
   if (indexpos == 0) {
     return
   }
   indexpos--
     for (i=0;i<id.length;i++) {
         document.getElementById(id[i]).classList.remove('active')
     }
   document.getElementById(id[indexpos]).classList.add('active')
 } else if (e == 39) {
     if (indexpos == 7) {
         return
     }
     indexpos++
     for (i=0;i<id.length;i++) {
         document.getElementById(id[i]).classList.remove('active')
     }
     document.getElementById(id[indexpos]).classList.add('active')
 } else if (e == 32) {
     insertToken(indexpos)
     indexpos = 0;
     for (i=0;i<id.length;i++) {
         document.getElementById(id[i]).classList.remove('active')
     }
     document.getElementById(id[indexpos]).classList.add('active')

 }
} else {
    return 
}
}

function insertToken(col) {
    let gettone = document.createElement("div")
    let posy
    console.log('rowstatus: ', col)
    if (rowstatus[col] >= 0) {
     posy = rowstatus[col]--

    } else {
        console.log("non dovrei essere qui")
        return

    }
    gettone.classList.add("gettone")
    let y = "y" + posy
    let x = "x" + col
    gettone.classList.add(y)
    gettone.classList.add(x)
    let win = 0
    if (player == 1) {
        gettone.classList.add("rosso")
        arr[posy][col] = 1
        win = chkWinner(arr)
        player = -1
    } else {
        gettone.classList.add("giallo")
        player = 1
        arr[posy][col] = 2
        win = chkWinner(arr)
    }
    document.getElementById('container').appendChild(gettone)
    if (win !== 0) {
        let nomeg = ""
        win === 1 ? nomeg = "rosso" : nomeg = "giallo"
        victory = true
        let p = document.createElement("h1")
        p.innerHTML = "Vittoria di: " + nomeg
        document.getElementById('stato').appendChild(p)
        document.getElementById('stato').style.display = "block"
    }


    console.log(arr)
    

}

function chkLine(a,b,c,d) {
    
    return ((a !== 0) && (a ===b) && (a === c) && (a === d));
}

function chkWinner(bd) {
    
    for (r = 0; r < 4; r++) {
        for (c = 0; c < 7; c++) {
            
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];
        }
    }
     for (r = 0; r < 7; r++) {
         for (c = 0; c < 5; c++) {
           
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];
         }
        }
    
    for (r = 0; r < 4; r++) {
        for (c = 0; c < 5; c++) {
            
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];
        }
    }
    
    for (r = 3; r < 7; r++) {
        for (c = 0; c < 5; c++) {
            console.log('row: ', r, 'val: ', bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]) 
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];
        }
    }
    return 0;
}
