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
        $("#tkn_h").html(`<h6 id="num_h">${tkn_h}</h6>`);
    } else {
        $("#tkn_h").html(`
         <input type="number" id="i_tkn_h" class="m-2">
        <button id="btn_tkn_h" type="button" class="btn btn-primary m-2" onclick="setTkn_H()">Set</button>
        <p>Number Invalid</p>
        `);
    }
}
/* ------------------------- POINTS VALUE ------------------------- */
function setPoints() {

    var ptn= $("#points").val();
    var ptn_n = parseInt(ptn);
    if (ptn_n >= 1 && 199) {
        $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);
    } else {
        $("#ptn").html(`
        <input type="number" class="m-2" id="points">
        <button type="button" class="btn btn-primary m-2" onclick="setPoints()">Set</button>
        <p>Max 199</p>
        `);
    }
    // console.log(ptn)
}
/* -------------------------------------------------------------------------- */

/* ----------------------------- Time calculate ----------------------------- */

function calcTime() {
    // tkn needed
    var tkn = $("#num").text();
    // tkn hold
    var tkn_h = $("#num_h").text();
    // text to N
    var a = parseInt(tkn);
    var b = parseInt(tkn_h);

    // console.log(tkn,tkn_h)
    // console.log(a,b)

    if (a >= 1 && 9999 & b >= 1 && 9999) {
        var allTkn = a - b
        // win s
        var win = ((allTkn/10)*2000)
        // lose s
        var lose = ((allTkn / 10) * 3000)

        function WinTime(n) {
            var day = parseInt(n / (24 * 3600));

            n = n % (24 * 3600);
            var hour = parseInt(n / 3600);

            n %= 3600;
            var minutes = n / 60;

            n %= 60;
            var seconds = n;

            $(".output").html(`
                ${day} D ${hour} H ${minutes.toFixed()} M ${seconds.toFixed() } S
            `)
        }

        var w = win
        WinTime(w);

        function LoseTime(n) {
            var day = parseInt(n / (24 * 3600));

            n = n % (24 * 3600);
            var hour = parseInt(n / 3600);

            n %= 3600;
            var minutes = n / 60;

            n %= 60;
            var seconds = n;

            $(".output1").html(`
                ${day} D ${hour} H ${minutes.toFixed()} M ${seconds.toFixed()} S
            `)
        }

        var l = lose
        LoseTime(l);

        $("#c_btn_time").html(` `)
        
    } else {
        $("#result").html(`
            ${tot}
        `) 
    }
}


/* -------------------------------------------------------------------------- */

function add() {
    var game = $("#mode").val();
    var gameTh = parseInt($("#gametime_h").val());
    var gameTm = parseInt($("#gametime_m").val());
    var gameTs = parseInt($("#gametime_s").val());
    var Wl = $("#win_lose").val();

    var GameTime = (gameTh * 60) + gameTm;

    switch (game) {
        case "1":
            if (GameTime == 0) {
                $("#notime").html(`<h5>Put the Game Time</h5>`)
            } else {
                if (game == 1) {
                    if (Wl == 1) {
                        var p = GameTime * 6;

                        var myP = parseInt($("#ptn_n").text());

                        console.log(myP)
                        console.log(p)

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        
                        if (gameTs >= 30) {
                            var NewMyP = NewMyP + 3;
                        }

                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {

                            // var ptn1 = parseInt(NewMyP + p);

                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    } else {
                        var p = GameTime * 4;
                        console.log(p)
                        var myP = parseInt($("#ptn_n").text());
                        console.log(myP)
                        console.log(p)
                        console.log("ecco")

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {


                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    }
                } else {
                    console.log("Error1")
                }
            }
            break;

        case "2":
            if (GameTime == 0) {
                $("#notime").html(`<h5>Put the Game Time</h5>`)
            } else {
                if (game == 2) {
                    if (Wl == 1) {
                        var p = GameTime * 6;

                        var myP = parseInt($("#ptn_n").text());

                        console.log(myP)
                        console.log(p)

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        if (gameTs >= 30) {
                            var NewMyP = NewMyP + 3;
                        }

                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {

                            // var ptn1 = parseInt(NewMyP + p);

                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    } else {
                        var p = GameTime * 3;
                        console.log(p)
                        var myP = parseInt($("#ptn_n").text());
                        console.log(myP)
                        console.log(p)
                        console.log("ecco")

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {


                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    }
                } else {
                    console.log("Error2")
                }
            }
            break;

        case "3":
            if (GameTime == 0) {
                $("#notime").html(`<h5>Put the Game Time</h5>`)
            } else {
                if (game == 3) {
                    if (Wl == 1) {
                        var p = GameTime * 2;

                        var myP = parseInt($("#ptn_n").text());

                        console.log(myP)
                        console.log(p)

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        if (gameTs >= 30) {
                            var NewMyP = NewMyP + 3;
                        }

                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {

                            // var ptn1 = parseInt(NewMyP + p);

                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    } else {
                        var p = GameTime * 1;
                        console.log(p)
                        var myP = parseInt($("#ptn_n").text());
                        console.log(myP)
                        console.log(p)
                        console.log("ecco")

                        var NewMyP = parseInt(myP + p);
                        console.log(NewMyP)
                        if (NewMyP >= 200) {

                            // var ptn = parseInt(NewMyP - 200);
                            var ptn = parseInt(NewMyP % 200);
                            var ptn1 = parseInt(NewMyP / 200);



                            console.log("maggiore")
                            // console.log(ptnR)

                            $("#ptn").html(`<h6 id="ptn_n">${ptn}</h6><h6 id="ptn_n">/200</h6>`);

                            var TknH = parseInt($("#tkn_h").text());
                            var NewTknH = TknH + (ptn1 * 10);



                            $("#tkn_h").html(`<h6 id="num_h">${NewTknH}</h6>`);
                            calcTime();
                        } else {


                            $("#ptn").html(`<h6 id="ptn_n">${NewMyP}</h6><h6 id="ptn_n">/200</h6>`);
                        }
                    }
                } else {
                    console.log("Error3")
                }
            }
            break;

        default:
            break;
    }

}
/* -------------------------------------------------------------------------- */
// es: 25:37 25x6 ma 37 conta come 3 punti

/* -------------------------------------------------------------------------- */