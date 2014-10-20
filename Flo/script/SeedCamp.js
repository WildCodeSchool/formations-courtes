$(document).ready(function()
{
	var move = 3;
	$("#right").click(function()
	{
		if (move < 4)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img src=./img/forma" + movemore + ".jpg>");
		}
		else if (move == 4)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
		}
		else
			move = move;
	});
	$("#left").click(function()
	{
		if (move > 2)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img src=./img/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img src=./img/forma" + movemore + ".jpg>");
		}
		else if (move == 2)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#pic").empty();
			$("#pic").append("<img src=./img/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img src=./img/forma" + movemore + ".jpg>");
		}
		else
			move = move;
	});
	$("#close").click(function()
	{
		$("#descmore").css("display", "none");
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
});
