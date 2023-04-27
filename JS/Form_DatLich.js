var modal = document.getElementById("Dat_Lich")
var btn = document.getElementById("btn_Form_DatLich")
var btn_Close = document.getElementById("btn_close")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

btn_Close.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}