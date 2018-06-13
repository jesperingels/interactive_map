/**
 * Created by jesperingels on 09-03-18.
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

        var el= document.createElement("div");
        console.log(el);
        //el.innerHTML = object.User_Avatar;
        el.classList.add("dot");


        document.body.appendChild(el);
    }
}