// JavaScript Document

var image= "two.gif";
var timerId = setInterval("document.getElementById('imgNumber1').src = image", 5000);

function changenumber() {

	document.getElementById('imgNumber1').src = "three.gif";
			} 
function stoptimer() {
	alert("Timer has stopped");
	clearInterval(timerId);	
			}


