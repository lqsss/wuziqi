/**
 * Created by liqiushi on 2017/5/16.
 */
/**
 * Created by liqiushi on 2017/5/15.
 */
//document.write("<script language=javascript src='./winOrLose.js'></script>");
/*
function addEvent(){
    var px =event.offsetX;
    var py =event.offsetY;
    var x = parseInt(px / 52);
    var y = parseInt(py / 52);
    if(px<0||py<0||py>498||px>498|| chessData[x][y] != 0){  //超出棋盘
        return ;
    }
    if(event.button===0) {
        doCheck(x,y);
    }
}*/
var flag="还未确认！";
var start =document.getElementsByClassName("start")[0];
start.onclick=function newGame(){
    location.reload(false);
    flag = selectModel[0];
    console.log(flag);
};

drawing.onclick=function(){
    var px =event.offsetX;
    var py =event.offsetY;
    var x = parseInt(px / 52);
    var y = parseInt(py / 52);
    if(px<0||py<0||py>498||px>498|| chessData[x][y] != 0){  //超出棋盘
        return ;
    }
    if(event.button===0) {
        doCheck(x,y);
    }
};
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
    if(flag===selectModel[0]){
        personModel(color,x,y);
    }else if(flag ===selectModel[1]){
        botModel(color,x,y);
    }else{
        alert("err!");
    }
}
function personModel(color,x,y){
    if(color==="black"){
        chess(color,x,y);
        console.log("黑子:"+x,y);
        record(color,x,y);
        judge(color,x,y);
        isWhite=true;
        //TurnForAI();
    }else{
        chess(color,x,y);
        console.log("白子:"+x,y);
        record(color,x,y);
        judge(color,x,y);
        isWhite=false;
    }
    if(!(totalStep--)){
        alert("平局!");
    }
}
function botModel(color,x,y){
    if(color==="black"){
        chess(color,x,y);
        console.log("黑子:"+x,y);
        record(color,x,y);
        judge(color,x,y);
        isWhite=true;
        TurnForAI();
    }else{
        chess(color,x,y);
        console.log("白子:"+x,y);
        record(color,x,y);
        judge(color,x,y);
        isWhite=false;
    }
    if(!(totalStep--)){
        alert("平局!");
    }
}

function doCheck(x,y){
    if(winner!==""){
        alert("游戏已经分出结果了！");
        return;
    }
    //console.log(isWhite)
    if(!isWhite){               //该黑子下
        chessOneStep("black",x,y);

    }else{                    //该白子下
        chessOneStep("white",x,y);

    }
}
