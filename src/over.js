
function log(str) {
  console.log(str);
  logDiv.innerHTML += str + "<br>";
}

function popup(element) {
  console.log("element");
  logDiv.innerHTML += "element" + "<br>";
}

function IMGwindow(url) {
	IMGshow.innerHTML = "ahoj <br><img src=\"http://meteor1.astrozor.cz/f.png?"+url +"\">";
}

function move(){
	var x = event.clientX, y = event.clientY,
	elementMouseIsOver = document.elementFromPoint(x, y);
	if (elementMouseIsOver.getAttribute("href") != null){
		IMGwindow(document.URL+elementMouseIsOver.getAttribute("href"));
	}
	//log("mouse move: "+elementMouseIsOver.getAttribute("href")+"<img src=\"http://meteor1.astrozor.cz/f.png?"+document.URL+elementMouseIsOver.getAttribute("href") +"\">");
}



var IMGshow = document.createElement("div");//.appendTo(document.body);
IMGshow.setAttribute('id', 'IMGshow');
document.body.appendChild(IMGshow);

var logDiv = document.createElement("div");//.appendTo(document.body);
logDiv.style.width = "100px";
logDiv.style.float = "right";
logDiv.setAttribute('id', 'SHOWBORDER');
logDiv.style.position = "absolute";
logDiv.style.border = "1px dashed black";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(logDiv);


//document.getElementById('Plot').onclick = go;
document.body.addEventListener("mousemove", move);
//var x = event.clientX, y = event.clientY,
//elementMouseIsOver = document.elementFromPoint(x, y);

log("Ready.");