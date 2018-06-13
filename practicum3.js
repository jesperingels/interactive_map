/**
 * Created by jesperingels on 06-03-18.
 */
function maakDiv() {
    var element = document.createElement("div");
    console.log(element);
    //element.style.display="block";
    element.classList.add('dot');
    element.style.width="70px";
    element.style.height="100px";
    element.style.backgroundColor="blue";
    element.style.left=Math.random() * 1980 + 'px';
    element.style.top=Math.random() * 1080 + 'px';
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.appendChild(element);
   //document.body.innerHTML = '<div style="position;absolute;width:20px;height:10px;background-color:blue;"></div>';
}

for (i = 0; i < 10; i++) {
    maakDiv();
}
setInterval(maakDiv,1);