
	$("<link>").attr({
		rel: "stylesheet",
		type: "text/css",
		href: "https://jackson38.github.io/tan/css/my.css"
	}).appendTo("head");

	$("body").append('<div class="King_Chance_Layer">' +
		'<div class="King_Chance_LayerCont" style="display:none;">' +
		'<div class="King_Chance_Layer_Close">Close</div>' +
		'<div class="King_Chance_Layer_Title">本 站 推 荐</div>' +
		'<div class="King_Chance_Layer_Btn">' +
		'<ul>' +
		'<li><a href="#">信誉担保</a></li>' +
		'<li><a href="#">百倍赔率</a></li>' +
		'<li><a href="#">百家乐</a></li>' +
		'<li><a href="#">体育彩票</a></li>' +
		'<li><a href="#">首充返利</a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="King_Chance_Layer_Content">' +
		'<ul>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.niupic.com/images/2019/07/13/_67.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.niupic.com/images/2019/07/13/_68.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.niupic.com/images/2019/07/13/_69.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.niupic.com/images/2019/07/13/_72.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.niupic.com/images/2019/07/13/_70.jpg" /></a></li>' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'</div>');


	var $King_Chance_LayerCont = $(".King_Chance_LayerCont");
	var $King_Chance_Layer_Close = $(".King_Chance_Layer_Close");
	var $King_Chance_Layer_Btn = $(".King_Chance_Layer_Btn > ul > li");
	var $King_Chance_Layer_Content = $(".King_Chance_Layer_Content > ul > li");
	var King_Chance_Layer_Btn_Hover = "hover";
	var King_Chance_Layer_Show_Num = 0;
	var King_Chance_Layer_Btn_Len = $King_Chance_Layer_Btn.length;
	$King_Chance_Layer_Btn.hover(function () {
		var King_Chance_Layer_Show_Num = $King_Chance_Layer_Btn.index(this);
		$(this).addClass(King_Chance_Layer_Btn_Hover).siblings().removeClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show().siblings().hide();
	});
	var King_Chance_Layer_Play = function () {
		King_Chance_Layer_Show_Num++;
		if (King_Chance_Layer_Show_Num >= King_Chance_Layer_Btn_Len) King_Chance_Layer_Show_Num = 0;
		$King_Chance_Layer_Btn.eq(King_Chance_Layer_Show_Num).addClass(King_Chance_Layer_Btn_Hover).siblings().removeClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show().siblings().hide();
	};

	$King_Chance_Layer_Close.click(function () { clearInterval(King_Chance_Layer_Play_Time); $King_Chance_LayerCont.slideUp(); });
	King_Chance_Layer_Pop = function () {
		$King_Chance_LayerCont.slideDown();
		$King_Chance_Layer_Btn.eq(King_Chance_Layer_Show_Num).addClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show();
		King_Chance_Layer_Play_Time = setInterval(function () { King_Chance_Layer_Play(); }, 2000);
	};
	$(document).ready(function () {
	setTimeout("King_Chance_Layer_Pop()", 5000);
	});

