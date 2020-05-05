var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pi = Math.PI;//число пи в градусах, а удобнее в %, для этого коэфициент к 
var k = 2*pi / 100; //  потом буду умножать на интересующий процент 
var x = 0;// start value
var max = 85;
var timeout;// для сохранения таймера

draw();

function draw(){
    var color = getColor(x);
    ctx.clearRect(0, 0, 250, 250);

    ctx.beginPath();
    //arc(x,y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(125, 125, 100, 0, x * k, false);//x - текущее состояние k коэфициент приведенный к градусам
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';//концы окружности
    ctx.stroke();
    ctx.closePath();
    x++;

    // рисую цифры
    ctx.beginPath();
    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = color;
    ctx.textAligh = 'center';
    ctx.fillText(x+'%', 60, 145);// 60 и 145 сдвиг по оси х и у
    ctx.closePath();
    
    //timeout = setTimeout(draw, 100);
    if (x < max){
        timeout = setTimeout(draw, 100);
    }
    else{
        clearTimeout(timeout);
    }

}
function getColor(x){
    x = x*255 / 100;// коэфициент, приводит % к значениям rbg (max 255)
    y = 255 - x;
    var color = 'rgb('+x+','+y+',0)';
    console.log(color);
    return color;
}
