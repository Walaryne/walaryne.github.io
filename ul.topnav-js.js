/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function activateHamburgerList() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

function prettify() {
    var scrollbarsize;
    scrollbarsize = window.innerWidth - document.body.clientWidth;
    document.getElementById("topnav").style.width = (100 - ((scrollbarsize / window.innerWidth) * 100)) + "%";
}
