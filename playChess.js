/**
 * Created by liqiushi on 2017/5/16.
 */
/**
 * Created by liqiushi on 2017/5/15.
 */
//document.write("<script language=javascript src='./winOrLose.js'></script>");
var drawing = document.getElementById("drawing");
var context = drawing.getContext("2d");
drawing.addEventListener("mousedown",function (event) {
    var px = event.offsetX;
    var py =event.offsetY;
    var x = parseInt(px / 52);
    var y = parseInt(py / 52);
    if(px<0||py<0||py>498||px>498|| chessData[x][y] != 0){  //超出棋盘
        return ;
    }
    doCheck(x,y);
})
function chess(color,x,y){              //绘制棋子
    context.fillStyle =color;
    context.beginPath();
    context.arc(x*52+20,y*52+20,15,0,Math.PI*2,false);
    context.closePath();
    context.fill();

    if(color ==="white"){
        chessData[x][y]=1;
    }else{
        chessData[x][y]=2;
    }
}

function chessOneStep(color,x,y){    //落子
    if(color==="black"){
        chess(color,x,y);
        console.log("黑子:"+x,y);
        judge(color,x,y);
    }else{
        chess(color,x,y);
        console.log("白子:"+x,y);
        judge(color,x,y);
    }
    if(!(totalStep--)){
        alert("平局!");
    }
}

function doCheck(x,y){
    if(!isWhite){               //该黑子下
        chessOneStep("black",x,y);
        isWhite=true;
    }else{                    //该白子下
        chessOneStep("white",x,y);
        isWhite=false;
    }
}