// 播放声音
function playSound(index) {
    // 根据音频索引播放相应的音频文件。
    var audio = new Audio(sounds.mp3Sound[`sound${index}`]);
    audio.play();

    // 把相应的按键所对应的div变一下背景颜色 
    var div = document.querySelector(`#key${index}`);
    div.style.backgroundColor = '#9cf';
    // 延迟0.1秒后让div背景颜色恢复原状。
    setTimeout(function () {
        if (index == 60 || index == 62 || index == 64 || index == 65 || index == 67 || index == 69 || index == 71 || index == 72) {
            div.style.backgroundColor = '#eee';
        } else {
            div.style.backgroundColor = '#666';
        }
    }, 100);
}

// 1. 按下某个键播放相应的声音。
document.onkeydown = function (ev) {
    switch (ev.keyCode) {
        case 65:	// a
        case 97:    // A
        case 81:	// q
        case 113:   // Q
        case 90:	// z
        case 122:
            playSound(60);
            break;
        case 87:	// w
        case 119:
            playSound(61);
            break;
        case 83:	// s
        case 115:
        case 88:	// x
        case 120:
            playSound(62);
            break;
        case 69:	// e
        case 101:
            playSound(63);
            break;
        case 67:	// c
        case 99:
        case 68:	// d
        case 100:
            playSound(64);
            break;
        case 70:	// f
        case 102:
        case 82:	// r
        case 114:
        case 86:	// v
        case 118:
            playSound(65);
            break;
        case 84:	// t
        case 116:
            playSound(66);
            break;
        case 66:	// b
        case 98:
        case 71:	// g
        case 103:
            playSound(67);
            break;
        case 89:	// y
        case 121:
            playSound(68);
            break;
        case 72:	// h
        case 104:
        case 78:	// n
        case 110:
            playSound(69);
            break;
        case 85:	// u
        case 117:
            playSound(70);
            break;
        case 77:	// m
        case 109:
        case 74:	// j
        case 106:
            playSound(71);
            break;
        case 75:	// k
        case 107:
        case 73:	// i
        case 105:
        case 44:	// ,
        case 188:
            playSound(72);
            break;
        default:
            break;
    }
}

// 2. 按下鼠标播放相应的声音。
// 获取所有可鼠标点击的元素。
var divs = document.querySelectorAll('#main div');
// 循环给每个元素绑定点击事件。
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function () {
        console.log(this.id);
        var index = this.getAttribute("id").replace('key', '') - 0;
        playSound(index);
    }
}
