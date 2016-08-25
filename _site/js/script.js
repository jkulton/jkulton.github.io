function progressor() {
	var windowHeight = window.innerHeight;
	var pageHeight = document.body.offsetHeight;

	if(document.querySelector("#progress-bar") === null) {
		var progress = document.createElement("section"); 
		progress.style.position = "fixed";
		progress.style.top = "0"; 
		progress.style.left = "0";
		progress.style.background = "#000";
		progress.style.height = "5px";
		progress.id = "progress-bar";
		document.body.appendChild(progress);
	}

	if(pageHeight - windowHeight > 100) {
		var scrollPos = window.innerHeight + window.pageYOffset;
		var state = scrollPos - windowHeight;
		var end = pageHeight - windowHeight;
		document.querySelector("#progress-bar").style.width = ((state / end) * 100) + "%";
	} else {
		document.querySelector("#progress-bar").style.width = "0%";
	}
}