$(document).ready(function(){
	alert("JAVA the Pizza Hut");
	$("p").text("Y lo persigue como perro a su cola");
	$("#nombre").text("Lo siento Jesus").css("color","red");
	$("#nombre").css("fontFamily","Helvetica");
	$(".nombre").text("A GUAILD TECST APIERS");
	$(".clase").click(function(){
		$("#nombre").css("fontSize",48);
		$("#nombre").text("EDGAR NO HA COMIDO").css("color","blue");
		});
	$(".imagen").hover(function(){
		$(".imagen").attr("src","http://new1.fjcdn.com/comments/Happy+husky+reporting+in+do+you+read+me+_5ffec829d9a23c2dce7a36f9aff78d5a.jpg");
	});
});

