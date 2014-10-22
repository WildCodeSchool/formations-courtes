$(document).ready(function()
{
	var move = 3;
	var coms = 1;
	$("#right").click(function()
	{
		if (move < 4)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma" + movemore + ".jpg>");
		}
		else if (move == 4)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma1.jpg>");
		}
		else if (move == 5)
		{
			move = move + 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma5.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma1.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma2.jpg>");
		}
		else if (move == 6)
		{
			move = move + 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma1.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma2.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma3.jpg>");
			move = 2;
		}
		else
		{
			move = move;
		}
	});
	$("#left").click(function()
	{
		if (move > 2)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma" + movemore + ".jpg>");
		}
		else if (move == 2)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma5.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma" + movemore + ".jpg>");
		}
		else if (move == 1)
		{
			move = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma4.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma5.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma1.jpg>");
		}
		else if (move == 0)
		{
			move = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./img/forma3.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma4.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./img/forma5.jpg>");
			move = 4;
		}
		else
			move = move;
	});
	$("#switch").click(function()
	{
		coms = coms + 1;
		if (coms == 1)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./img/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><h3>Depuis que je suis dans le perche, je mange des pattes, je n'ai pas le chauffage et j'ai des moucherons chez moi...</h3></blockquote></div>");
		}
		else if (coms == 2)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./img/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><h3>Avant, j'adorais dormir, maintenant...je rêve de code.</h3></blockquote></div>");
		}
		else if (coms == 3)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./img/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><h3>ILS NOUS VOLENT NOTRE TRAVAIL !</h3></blockquote></div>");
			coms = 0;
		}
		else
			coms = coms;
	});
	$("#close").click(function()
	{
		$("#descmore").css("display", "none");
	});
	$("#close").mouseenter(function()
	{
		$("#close").css("opacity", "0.5");
	});
	$("#close").mouseleave(function()
	{
		$("#close").css("opacity", "1");
	});
	$("#pic").click(function()
	{
		$("#descmore").css("display", "inline");
	});
	$("#pic").mouseenter(function()
	{
		$("#pic").css("border", "solid #FFFFFF 5px");
	});
	$("#pic").mouseleave(function()
	{
		$("#pic").css("border", "solid #333331 0px");
	});
	$("#left").mouseenter(function()
	{
		$("#left").css("color", "#FFFFFF");
	});
	$("#left").mouseleave(function()
	{
		$("#left").css("color", "#333331");
	});
	$("#right").mouseenter(function()
	{
		$("#right").css("color", "#FFFFFF");
	});
	$("#right").mouseleave(function()
	{
		$("#right").css("color", "#333331");
	});
});
