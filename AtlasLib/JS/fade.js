var box;
var text;
var idFaceIn;
var idFaceOut;
var opacity = 0.5;

function faceIn(elt) {
	elt.innerHTML = "Mouse in."
	window.clearInterval(idFaceOut);
    idFaceIn = window.setInterval(function(){
		if (elt.style.opacity <= 0.99) {
			opacity += 0.1;
			elt.style.opacity = opacity;
		} else {
			elt.innerHTML = "Mouse in done";
		}		    	
    }, 50);
}
function faceOut(elt) {
	elt.innerHTML = "Mouse out."
	window.clearInterval(idFaceIn);
    idFaceOut = window.setInterval(function(){
		if (elt.style.opacity >= 0.4) {
			opacity -= 0.1;
			elt.style.opacity = opacity;
		} else {
			elt.innerHTML = "Mouse out done";
		}		    	
    }, 50);			
}
