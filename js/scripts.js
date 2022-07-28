window.addEventListener('DOMContentLoaded', function () {


    //    Twitch
    new Twitch.Player("twitch-ad-1", {
        channel: "cerbero_podcast"
    });

    new Twitch.Player("twitch-ad-2", {
        channel: "pow3rtv"
    });
    
    new Twitch.Player("twitch-ad-3", {
        channel: "moonryde"
    });

    new Twitch.Player("twitch-ad-4", {
        channel: "amouranth"
    });

    new Twitch.Player("twitch-ad-5", {
        channel: "andreadel1988"
    });
    /* --------------------------------- scroll --------------------------------- */
    /* ------------------------------- da rivedere ------------------------------ */
    
    // it's a div, that holds your news
    // it holds ul with news in li elements
    // var div = document.getElementById("c-ads");
    // div.addEventListener("scroll", function () {
    //     var max_scroll = this.scrollHeight - this.clientHeight;
    //     var current_scroll = this.scrollTop;
    //     var bottom = 100;
    //     if (current_scroll + bottom >= max_scroll) {
    //         var ul = document.getElementById("l-ads")[0];
    //         var current = parseInt(ul.dataset.current, 10);
    //         var li = document.getElementsByClassName("twitch-embed")[current] ;
    //         var new_li = li.cloneNode(true);
    //         ul.appendChild(new_li);
    //         ul.dataset.current = current + 1;
    //     }
    // });

/* -------------------------------------------------------------------------- */
    // Set the date we're counting down to
    var countDownDate = new Date("Aug 16, 2022 08:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Number Validator
    var inputs = $("#test");
    inputs.addEventListener('keypress', onlyNumber(inputs));
    // for(i = 0; i < inputs.lenght; i++){
    //     inputs[i].addEventListener('keypress', onlyNumber(inputs[i]));
    // }

    

})

function onlyNumber(el){
    console.log(el.target)
}
/* ------------------------- TOKEN NEED STAMP VALUE ------------------------- */
function setTkn() {

    var tkn = $("#i_tkn").val();
    var tkn_n = parseInt(tkn);
    if (tkn_n >= 1 && 9999) {
        $("#tkn").html(`<h6 id="num">${tkn}</h6>`);
    } else {
        $("#tkn").html(`
         <input type="number" id="i_tkn" class="m-2">
        <button id="btn_tkn" type="button" class="btn btn-primary m-2" onclick="setTkn()">Set</button>
        <p>Number Invalid</p>
        `);
    }
}
/* ------------------------- TOKEN Hold STAMP VALUE ------------------------- */
function setTkn_H() {

    var tkn_h = $("#i_tkn_h").val();
    var tkn_h_n = parseInt(tkn_h);
    if (tkn_h_n >= 1 && 9999) {
        $("#tkn_h").html(`<h6 id="num">${tkn_h}</h6>`);
    } else {
        $("#tkn_h").html(`
         <input type="number" id="i_tkn_h" class="m-2">
        <button id="btn_tkn_h" type="button" class="btn btn-primary m-2" onclick="setTkn_H()">Set</button>
        <p>Number Invalid</p>
        `);
    }
}
/* -------------------------------------------------------------------------- */