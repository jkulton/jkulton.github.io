function prog() {
	var wh = window.innerHeight;
	var ph = document.body.offsetHeight;
	var el = document.querySelector("#progress-bar");
	var buffer = 100;

	if(el === null) {
		var pb = document.createElement("section"); 
		pb.style.position = "fixed";
		pb.style.top = "0"; 
		pb.style.left = "0";
		pb.style.background = "#ff0000";
		pb.style.height = "2px";
		pb.id = "progress-bar";
		document.body.appendChild(pb);
	} else {
	if(ph - wh > buffer) {
		var pos = wh + window.pageYOffset;
		var prog = pos - wh;
		var end = ph - wh;
		el.style.width = ((prog / end) * 100) + "%";
	} else {
		el.style.width = "0%";
	}

	}
}