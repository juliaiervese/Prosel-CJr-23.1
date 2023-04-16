/* CARROSSEL */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextimage();
}, 3000) 

function nextimage (){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}
/* CARROSSEL */
/* MODAL 1 */
const button = document.querySelector(".button1")
const modal= document.querySelector(".dialog1")
const buttonClose = document.querySelector(".dialog1")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}
/* MODAL 1 */

/* MODAL 2 */
const button2= document.querySelector(".button2")
const modal2= document.querySelector(".dialog2")
const buttonClose2 = document.querySelector(".dialog2")

button2.onclick = function () {
    modal2.showModal()
}

buttonClose2.onclick = function () {
    modal2.close()
}
/* MODAL 2 */

/* MODAL 3 */
const button3= document.querySelector(".button3")
const modal3= document.querySelector(".dialog3")
const buttonClose3 = document.querySelector(".dialog3")

button3.onclick = function () {
    modal3.showModal()
}

buttonClose3.onclick = function () {
    modal3.close()
}
/* MODAL 3 */

/* MODAL 4 */
const button4= document.querySelector(".button4")
const modal4= document.querySelector(".dialog4")
const buttonClose4 = document.querySelector(".dialog4")

button4.onclick = function () {
    modal4.showModal()
}

buttonClose4.onclick = function () {
    modal4.close()
}
/* MODAL 4 */

/* MODAL 5 */
const button5= document.querySelector(".button5")
const modal5= document.querySelector(".dialog5")
const buttonClose5 = document.querySelector(".dialog5")

button5.onclick = function () {
    modal5.showModal()
}

buttonClose5.onclick = function () {
    modal5.close()
}
/* MODAL 5 */

/* MODAL 6 */
const button6= document.querySelector(".button6")
const modal6= document.querySelector(".dialog6")
const buttonClose6 = document.querySelector(".dialog6")

button6.onclick = function () {
    modal6.showModal()
}

buttonClose6.onclick = function () {
    modal6.close()
}
/* MODAL 6 */

/* MODAL 7 */
const button7= document.querySelector(".button7")
const modal7= document.querySelector(".dialog7")
const buttonClose7 = document.querySelector(".dialog7")

button7.onclick = function () {
    modal7.showModal()
}

buttonClose7.onclick = function () {
    modal7.close()
}
/* MODAL 7 */

/* MODAL 8 */
const button8= document.querySelector(".button8")
const modal8= document.querySelector(".dialog8")
const buttonClose8 = document.querySelector(".dialog8")

button8.onclick = function () {
    modal8.showModal()
}

buttonClose8.onclick = function () {
    modal8.close()
}
/* MODAL 8 */

/* MODAL 9 */
const button9= document.querySelector(".button9")
const modal9= document.querySelector(".dialog9")
const buttonClose9 = document.querySelector(".dialog9")

button9.onclick = function () {
    modal9.showModal()
}

buttonClose9.onclick = function () {
    modal9.close()
}
/* MODAL 9 */

/* MODAL 10 */
const button10= document.querySelector(".button10")
const modal10= document.querySelector(".dialog10")
const buttonClose10 = document.querySelector(".dialog10")

button10.onclick = function () {
    modal10.showModal()
}

buttonClose10.onclick = function () {
    modal10.close()
}
/* MODAL 10 */

/* MODAL 11 */
const button11= document.querySelector(".button11")
const modal11= document.querySelector(".dialog11")
const buttonClose11 = document.querySelector(".dialog11")

button11.onclick = function () {
    modal11.showModal()
}

buttonClose11.onclick = function () {
    modal11.close()
}
/* MODAL 11 */

/* MODAL 12 */
const button12= document.querySelector(".button12")
const modal12= document.querySelector(".dialog12")
const buttonClose12 = document.querySelector(".dialog12")

button12.onclick = function () {
    modal12.showModal()
}

buttonClose12.onclick = function () {
    modal12.close()
}
/* MODAL 12 */
