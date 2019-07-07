$(document).ready(function () {
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
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.loli.net/2019/07/07/5d21c7e72d14549039.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.loli.net/2019/07/07/5d21c7fe66f3f87614.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.loli.net/2019/07/07/5d21c8093727536422.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.loli.net/2019/07/07/5d21c80ae0f3b85207.jpg" /></a></li>' +
		'<li><a href="https://y52003.com/" target="_blank"><img src="https://i.loli.net/2019/07/07/5d21c80c3614b99400.jpg" /></a></li>' +
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



	var scripts = document.getElementsByTagName("script"), script = scripts[scripts.length - 1];
	strJsPath = document.querySelector ? script.src : script.getAttribute("src", 4);
	strJsPath = strJsPath.substring(0, strJsPath.lastIndexOf("/")) + "/";
	function King_Chance_Layer_Probability(King_Chance_Layer_Array) {
		var King_Chance_Layer_Array_Num = 0, King_Chance_Layer_Array_Rnd, King_Chance_Layer_Array_NewRnd = 0;
		for (i = 0; i < King_Chance_Layer_Array.length; i++) { King_Chance_Layer_Array_Num += King_Chance_Layer_Array[i]; };
		var King_Chance_Layer_Array_Rnd = Math.round((King_Chance_Layer_Array_Num - 1) * Math.random()) + 1;
		if (King_Chance_Layer_Array_Rnd <= 0) return false;
		for (i = 0; i < King_Chance_Layer_Array.length; i++) {
			King_Chance_Layer_Array_NewRnd += King_Chance_Layer_Array[i];
			if (King_Chance_Layer_Array_Rnd <= King_Chance_Layer_Array_NewRnd) {
				if (window.addEventListener) { window.addEventListener("load", King_Chance_Layer_Pop, false); }
				else { window.attachEvent("onload", King_Chance_Layer_Pop); };
				break;
			};
		};
	};

	$(function () {
		var King_Chance_Layer_Array = new Array();
		King_Chance_Layer_Array[0] = 10;
		King_Chance_Layer_Array[1] = 10;
		King_Chance_Layer_Array[2] = 10;
		King_Chance_Layer_Array[3] = 10;
		King_Chance_Layer_Array[4] = 10;
		King_Chance_Layer_Array[5] = 10;
		King_Chance_Layer_Array[6] = 40;
		King_Chance_Layer_Probability(King_Chance_Layer_Array);
	});


});

