function cambiarImagen() {
	var imagen = document.getElementById("imagen");
	console.log(imagen.getAttribute("src","http://i.ytimg.com/vi/8M7Qie4Aowk/hqdefault.jpg"));
	if(imagen.getAttribute("src")=="http://i.ytimg.com/vi/8M7Qie4Aowk/hqdefault.jpg"){
		imagen.setAttribute("src","http://www.quickmeme.com/img/00/00b641b82da3c1ac55bde2c66d0402ee86082e92c5634d31a3c7c2d50dc56057.jpg");
	}
	else{
		imagen.setAttribute("src","http://i.ytimg.com/vi/8M7Qie4Aowk/hqdefault.jpg");
	};
};

var miboton=document.getElementById("bot");
miboton.onclick=cambiarImagen;