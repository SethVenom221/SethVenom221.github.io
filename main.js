menubutton = document.getElementsByClassName("open-icon")[0];
menuscreen = document.getElementsByClassName("menu")[0];

function openClose() {
	mbpos = paseInt(menubutton.style.left.slice(0,(menubutton.style.left.length - 2)));
	mspos = paseInt(menuscreen.style.left.slice(0,(menuscreen.style.left.length - 2)));
	if(menuscreen.style.left == -258){
		var myvar = setInterval("click", function(){
			if(menuscreen.style.left == 0){
				clearInterval(myvar);
			}
			else{
				menubutton.style.left += 5;
				menuscreen.style.left += 5;
			}
		},10);
	else{
		var myvar = setInterval("click", function(){
			if(menuscreen.style.left == -285){
				clearInterval(myvar);
			}
			else{
				menubutton.style.left -= 5;
				menuscreen.style.left -= 5;
			}
		},10);
	}
	
	}

}
