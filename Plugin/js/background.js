var isLogin = false;
var uid = null;
var account= null;

var selection = null;
var obj = null;
var before = "";
chrome.runtime.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		if (msg.selection != undefined) {
			selection = msg.selection;
			var xmlhttp = new XMLHttpRequest();
			var params =  "content="
					+ selection;
			xmlhttp.open("POST", "http://localhost:8080/read/chrome/highlight",
					false);
			xmlhttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xmlhttp.send(params);
			obj = eval("(" + xmlhttp.responseText + ")");
		}
		if (msg.check != undefined) {
			if (isLogin)
				port.postMessage({
					value : "true"
				});
			else
				port.postMessage({
					value : "false"
				});
		}
		if (msg.search != undefined) {
			if (msg.search == "keywords") {
				if (before != selection) {
					window.open("search.html", name = "_blank");
					before = selection;
					port.postMessage({
						search : "done"
					});
				}
			}
		}
	});
});

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost:8080/read/chrome/enhance", false);
xmlhttp.send();
var obj2 = JSON.parse(xmlhttp.responseText);
var number_of_annotations = obj2.number_of_annotations;

var profile = null;
