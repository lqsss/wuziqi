/**
 * Created by liqiushi on 2017/5/15.
 */
var drawing = document.getElementById("drawing");
var context = drawing.getContext("2d");
function InitStyle() {
    if (drawing.getContext) {       //获取上下文
        context.fillStyle = "#EEB4B4";
        context.fillRect(0, 0, 510, 510);
    }
}
InitStyle();
function InitRC(){
    if (drawing.getContext) {       //获取上下文
        for(var i=0;i<10;i++){
            context.beginPath();
            context.moveTo(20+i*52,20);
            context.lineTo(20+i*52,490);
            context.closePath()
            context.strokeStyle="black";
            context.stroke();
            context.beginPath();
            context.moveTo(20,20+i*52);
            context.lineTo(490,20+i*52);
            context.closePath()
            context.strokeStyle="black";
            context.stroke();
        }
    }
}
InitRC();


