window.onload = function() {
    var letterH = document.getElementById("line");
    var loadW = document.getElementById("load-wrapp");

    function enableOk() {
        letterH.classList.toggle("disable");
        loadW.classList.toggle("ok");
    }

    function disableOk() {
        letterH.classList.remove("disable");
        loadW.classList.remove("ok");
    }
}