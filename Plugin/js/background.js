var isLogin = false;
var selection = null;
var obj = null;
chrome.runtime.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		if (msg.selection != undefined) {
			selection = msg.selection;
			var xmlhttp = new XMLHttpRequest();
			var params =  "content=" + selection;
			xmlhttp.open("POST", "http://localhost:8080/read/chrome/highlight",
					false);
			xmlhttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xmlhttp.send(params);
			obj = eval("(" + xmlhttp.responseText + ")");
			port.postMessage({
				search : "done",
				type: "searchOver",
				object: obj
			});
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
					port.postMessage({
						search : "done",
						type: "display",
						object: obj
					});
				}
			}
	});
});

// xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "http://localhost:8080/read/chrome/enhance", false);
// xmlhttp.send();
// var obj2 = JSON.parse(xmlhttp.responseText);
// var number_of_annotations = obj2.number_of_annotations;

var profile = null;
