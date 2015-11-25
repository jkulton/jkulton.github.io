window.onload = function night(){
  var d = new Date();
  
  if (d.getHours() >= 20 || d.getHours() <= 8)
  {
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.id = "night";
  }
};

function toggle(){

	var body = document.getElementsByTagName('body')[0];

	if(body.id == "night"){
		body.id = "";
	}
	else if(body.id == ""){
		body.id = "night";
	}

};