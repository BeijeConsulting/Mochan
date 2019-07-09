var indexpos = 0
var pg = document.getElementById('posizione')
var griglia = document.getElementById('griglia')
var id = []
var player = 1
var rowstatus = [7,7,7,7,7,7,7,7]
for (i=0;i<8;i++) {
  id[i] = "posizione" + i
}

var arr = []
for (i=0;i<9;i++) {
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
}

function insertToken(col) {
    let gettone = document.createElement("div")
    let posy
    console.log(rowstatus)
    if (rowstatus[col] > 0) {
     posy = rowstatus[col]--

    } else {
        console.log("non dovrei essere qui")
        return

    }
    gettone.classList.add("gettone")
    if (player == 1) {
        gettone.classList.add("rosso")
        arr[col][posy] = 1

        player = -1
    } else {
        gettone.classList.add("giallo")
        player = 1
        arr[col][posy] = -1
    }


    console.log(arr)
    document.getElementById('container').appendChild(gettone)

}
