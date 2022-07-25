window.addEventListener('DOMContentLoaded', function(){

    // pagine
    var p1 = document.getElementById("pag1");
    var p2 = document.getElementById("pag2");
    var p3 = document.getElementById("pag3");
    var p4 = document.getElementById("pag4");

    // navbar button
    var btn_home = document.getElementById("home");
    var btn_about = document.getElementById("about");
    var btn_services = document.getElementById("services");
    var btn_contact = document.getElementById("contact");

    // pag counter
    var count_pag = document.getElementById("pag_text_count");
    var slide_count = document.getElementById("slide_pag");

    // pagina 1
    btn_home.onclick = function() {
        count_pag.innerHTML = `01`
        slide_count.innerHTML = `
        <div id="pag_bar_count">

        </div>
        `
    }
    
    // pagina 2
    btn_about.onclick = function() {
        count_pag.innerHTML = `02`
        slide_count.innerHTML = `
        <div id="pag_bar_count2">

        </div>
        `
    }

    // pagina 3
    btn_services.onclick = function() {
        count_pag.innerHTML = `03`
    }

    // pagina 4
    btn_contact.onclick = function() {
        count_pag.innerHTML = `04`
    }
})