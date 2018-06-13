/**
 * Created by jesperingels on 09-03-18.
 */
function getUserData() {
    var request = new XMLHttpRequest();
    request.open('GET', '/pid1718/eindopdracht/index.php', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            //console.log(request.responseText);
            var data = JSON.parse(request.responseText);
            // Het is gelukt!
            maakDiv(data);
            //console.log(request);

        } else {
            console.log('de server is bereikt, maar daarna is er iets misgegaan');
            // De server is bereikt, maar daarna is iets misgegaan
        }
    };
    request.onerror = function () {
        console.log('er kon geen verbinding gemaakt worden met de server');
// Er kon geen verbinding gemaakt worden met de server.
    };
    request.send();
}
getUserData();

function maakDiv(jsonData) {

    for (var i = 0; i < jsonData.length; i++) {
        // i gaat van 0 tot de lengte van jsonData
        // we zoeken ‘nummer i’ uit jsonData en slaan dat item op in object
        var object = jsonData[i];
        //console.log( object );

        var el = document.createElement("div");
        el.className = "country";

        el.style.left = object.Longitude * 4.5 + 605 + 'px';
        el.style.bottom = object.Latitude * 4.9 + 310 + 'px';
        el.style.width = object.Users_Present / 2.5 + "px";
        el.style.height = object.Users_Present / 2.5 + "px";
        el.style.border="1px solid black";
        el.innerHTML = "<span class='span'>" +
            object.Country_Name +
            "</span>";

        if (object.Users_Present < 25) {
            el.style.backgroundColor = "#9aff97";
        }
        else if (object.Users_Present < 50) {
            el.style.backgroundColor = "#3A94E8";
        }
        else if (object.Users_Present < 75) {
            el.style.backgroundColor = "#9154d4";
        }
        else if (object.Users_Present < 100) {
            el.style.backgroundColor = "#e8705b";
        }


        document.getElementById('mapHolder').appendChild(el);

    }
}


