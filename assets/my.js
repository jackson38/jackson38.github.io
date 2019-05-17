function RandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.floor(Rand * Range);
        return num;
}
$(function(){
    var webchats=new Array("hg96007","HG888999675","huangguan8002", "VIP59990444", "woaihuangguan001", "x0779977", "xiaofenhg123", "xiaojin12315", "xiaowan555201", "xiaowu2922474", "zc5202550", "zl2288629", "zx868979");
    var id = RandomNum(0, webchats.length);
    var webchatid = webchats[id];
    var webchatimg = 'images/webchat/' + webchatid + '.jpg';
    $("#webchatid").html(webchatid);
    $("#webchatimg").attr('src', webchatimg);
});