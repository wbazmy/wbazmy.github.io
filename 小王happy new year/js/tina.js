
//获取n位随机数,随机来源chars
var chars = ['IntheMiddle-MorganBain.mp3','IntheMiddle-MorganBain.mp3','LovingYou.mp3','电音之王.mp3'];
function generateMixed(n) {
    var res = "";
    for(var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 3);
        res += chars[id];
    }
    return res;
}

$('#musicid').attr('src',"music/"+generateMixed(1));
// 音乐播放
function autoPlayMusic() {

    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }

    document.body.addEventListener('touchstart', musicInBrowserHandler);

    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }

    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function musicPlay(isPlay) {
    var audio = document.getElementById('musicid');

    if (isPlay && audio.paused) {
        audio.play();
    }
    if (!isPlay && !audio.paused) {
        audio.pause();
    }
}

autoPlayMusic();


var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://tinaroot.cn:38888/home/2022', true);
httpRequest.setRequestHeader("Content-type", "application/json");
httpRequest.send();