var box;
var text;
var idFaceIn;
var idFaceOut;
var opacity = 0.5;

function init(){  // body 前
	for(i=1; i<=2; i++) {
		box = document.getElementById("box-"+i);  // Global var 方便用
		box.addEventListener("mousedown", mousedown);
		box.addEventListener("mouseup", mouseup);
	}
}

function mousedown(e) {
	delta_x = e.clientX - box.offsetLeft;
	delta_y =  e.clientY - box.offsetTop;
	document.addEventListener("mousemove", move);
}
function mouseup() {
	document.removeEventListener("mousemove", move);
}

// Need to refine, how to know which box you selected
function move(e){
	box.style.left=(e.clientX - delta_x)  + "px";  // note 0px 不行
	box.style.top= (e.clientY - delta_y) + "px";
}

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
