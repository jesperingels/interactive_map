/**
 * Created by jesperingels on 07-03-18.
 */
function getUserData() {
    var request = new XMLHttpRequest();
    request.open('GET', '/pid1718/index.php', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            var data = JSON.parse(request.responseText);
            // Het is gelukt!
            maakDiv(data);


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

function maakDiv(jsonData){

    for (var i = 0; i < jsonData.length; i++){
        // i gaat van 0 tot de lengte van jsonData
        // we zoeken ‘nummer i’ uit jsonData en slaan dat item op in object
        var object = jsonData[i];
        console.log( i );

        var element = document.createElement("div");
        var el      = document.createElement("div");
console.log(el);
        el.innerHTML = object.User_Avatar;
        el.classList.add('dot');

        /* if( object.User_Gender=='V'){
            el.style.backgroundColor='pink';
        }
        else{element.style.backgroundColor='blue';}*/
        //el.style.marginLeft=object.Game_id / 10 + 'px';

        //element.style.height = window.innerHeight + 'px';

        //element = window.innerHeight;
        el.style.width =object.Game_Score / 100 + "px";
        el.style.height =object.Game_Score / 100 + "px";
        el.style.marginBottom=object.Game_Duration * 2 + "px";
        document.body.appendChild(el);
    }
}

/*

Function: MaakQuery: Doe een database-query en haal 1 random item op
Function: MaakDiv: Doe het resultaat in de div plakken

Opdracht: Voer MaakQuery uit (met interval)




 */