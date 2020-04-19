document.getElementById("logout").onclick = function() {
	chrome.extension.getBackgroundPage().isLogin = false;
	chrome.extension.getBackgroundPage().uid = null;
	chrome.extension.getBackgroundPage().access_token = null;
};

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost:8080/getInfo/"
		+ chrome.extension.getBackgroundPage().uid , false);
xmlhttp.send();
var obj = eval("(" + xmlhttp.responseText + ")");
document.getElementById("name").innerHTML = "&nbsp;" + obj.account;
if (obj.picture != "") {
	document.getElementById("avatar").src = obj.picture;
}
document.getElementById("1").onclick =tab1;
document.getElementById("3").onclick =tab3;

element=document.getElementById("1");
