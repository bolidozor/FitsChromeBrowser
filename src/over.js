
function log(str) {
  console.log(str);
  logDiv.innerHTML += str + "<br>";
}

function popup(element) {
  console.log("element");
  logDiv.innerHTML += "element" + "<br>";
}

function IMGwindow(url) {
	IMGshow.innerHTML = "";
	IMGshow.innerHTML = IMGshow.innerHTML + "<a href=\"http://meteor1.astrozor.cz/f.png?"+url +"\">meteor1.astrozor.cz/f.png?..."+url.slice(-20) +"</a><br>";
	var lastSlash = url.lastIndexOf("/");
	IMGshow.innerHTML = IMGshow.innerHTML + "from:   <b>" + url.substring(lastSlash+1).substring(6,8) + "."+ url.substring(lastSlash+1).substring(4,6) + "."+ url.substring(lastSlash+1).substring(0,4) + "  "+ url.substring(lastSlash+1).substring(8,10) + ":"+ url.substring(lastSlash+1).substring(10,12) + ":"+ url.substring(lastSlash+1).substring(12,14)+ "</b>,"+ url.substring(lastSlash+1).substring(14,17) + "<hr>";
	IMGshow.innerHTML = IMGshow.innerHTML + "<img src=\"http://meteor1.astrozor.cz/f.png?"+url +"\"><br><hr>";
	IMGshow.innerHTML = IMGshow.innerHTML + "<small>" + url + "</small>";
}// <a href="index.html">Hlavní stránka</a>

function move(){
	var x = event.clientX, y = event.clientY,
	elementMouseIsOver = document.elementFromPoint(x, y);
	//log(elementMouseIsOver.innerHTML);
	if (elementMouseIsOver.getAttribute("href") != null && elementMouseIsOver.parentNode.id != "IMGshow" && elementMouseIsOver.innerHTML.indexOf(".") > 2){
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