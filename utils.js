var mConsole;

// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        //get Console and SourceTable objects
		mConsole = document.getElementById("console");
    } else if (document.readyState == "complete") {
        
    }
};
 
//Utility Functions
function WriteLineConsole(str) {
    var currentDate = new Date();
    var para = document.createElement("span");
    var node = document.createTextNode(str);
    para.appendChild(node);
	para.appendChild(document.createElement("br"));
    mConsole.appendChild(para);
    //mConsole.insertBefore(para, mConsole.firstChild);
}

//Utility Functions
function clearConsole() {
    mConsole.innerHTML = "";
}