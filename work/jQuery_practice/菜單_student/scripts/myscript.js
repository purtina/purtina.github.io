$("#vegOn").click(function(){
	$fish = $("li.fish").parent().parent().detach();
	$(".meat").after (“<li class=\tofu\>Tofu</li>”);
	$(".meat").replaceWith('<li class = "portobello">龍葵辜</li>')
	$("portobello").parent().parent().addClass("leaf");
});