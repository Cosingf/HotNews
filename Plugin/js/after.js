var range = null;
var port = chrome.runtime.connect();
var left = null;
var topp = null;

var available = false;
port.onMessage.addListener(function(msg) {
	if (msg.value != undefined) {
		if (msg.value == "true")
			available = true;
		else
			available = false;
	}else if(msg.search!=undefined){
		document.getElementById('indicator').style.display = "none";
	}
});
port.postMessage({
	check : "test"
});
window.document.body.addEventListener("mouseup", function() {
	document.getElementById('search1').style.display = "none";
	if (available == true) {
		if (window.rangy.getSelection().getRangeAt(0).toString() != "") {
			document.getElementById('search1').style.display = "block";
			document.getElementById('search1').style.left = left + "px";
			document.getElementById('search1').style.top = topp + "px";
			if (range != null) {
				var a = document.getElementsByTagName("span");
				for ( var i = 0; i < a.length; i++) {
					if (a.item(i).className == "highlight")
						a.item(i).className = "";
				}
			}
			cssApplier.applyToRange(window.rangy.getSelection().getRangeAt(0));
			var a = document.getElementsByTagName("span");
			var str = "";
			for ( var i = 0; i < a.length; i++) {
				if (a.item(i).className == "highlight")
					str = str + a.item(i).innerHTML;
			}
			range = window.rangy.getSelection().getRangeAt(0);
			port.postMessage({
				selection : str
			});
		}
	}
});

document.onmousemove = function(ev) {
	left = ev.clientX;
	topp = ev.clientY;
};

var para = document.createElement("div");
para.id = "search1";
var a1 = document.createElement("a");
var i1 = document.createElement("img");
i1.src = "http://readpeer.com/sites/default/files/users/10/images/search2.png";
i1.width = "20";
i1.height = "20";
i1.title = "Search the selection";
a1.appendChild(i1);
para.appendChild(a1);

var indicator = document.createElement("img");
indicator.src = "http://readpeer.com/sites/all/themes/readpeer/images/indicator.gif";
indicator.width = "40";
indicator.height = "40";
indicator.id = "indicator";

document.body.appendChild(para);
document.body.appendChild(indicator);

a1.onclick = function() {
	document.getElementById('search1').style.display = "none";
	port.postMessage({
		search : "keywords"
	});
	document.getElementById('indicator').style.display = "block";
	document.getElementById('indicator').style.left = left + "px";
	document.getElementById('indicator').style.top = topp + "px";
};
