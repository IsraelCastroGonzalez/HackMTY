$(document).ready(function(){
	var control=0;
	$("#adImage").click(function(){
		if(control==0){
			$(this).animate({top:"-=50px"},500);
			$("#ad").append("<div class='adText'><a href='https://docs.google.com/forms/d/1biMMqtl-NbdwfPmGDQEqKuPsi0yLZrNTgmaivKOrgm0/viewform'><p id='adText'> ¿Sugerencias? Háznolas saber dando\nclick aqui</p></a></div>");
			$(".adText").fadeIn(1000);
			control++;

		}
		else{
			$(this).animate({top:"+=50px"},500);
			control--;
		}
		
	});
	$("#adImage").on("click",function(){
		if(control==0){
			$(".adText").fadeOut(2000).delay(1000).remove();
			
		}
	});

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#link1").click(function() {
	   scrollToAnchor("inicio");
	});


	$("#link2").click(function() {
	   scrollToAnchor("about");
	});


	$("#link3").click(function() {
	   scrollToAnchor("video");
	});


	$("#link4").click(function() {
	   scrollToAnchor("sponsor");
	});
	
});
$(".accordion dd").on("click", "a:eq(0)", function (event)
      {
        var dd_parent = $(this).parent();

        if(dd_parent.hasClass('active'))
          $(".accordion dd div.content:visible").slideToggle("normal");
        else
        {
          $(".accordion dd div.content:visible").slideToggle("normal");
          $(this).parent().find(".content").slideToggle("normal");
        }
      });