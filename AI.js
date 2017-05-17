/**
 * Created by liqiushi on 2017/5/16.
 */

var LEVEL_ONE = 0;//单子
var LEVEL_TWO = 1;//眠2，眠1
var LEVEL_THREE = 1500;//眠3，活2
var LEVEL_FOUR = 4000;//冲4，活3
var LEVEL_FIVE = 10000;//活4
var LEVEL_SIX = 100000;//成5

function computedScore(x,y){
    var whiteScore = sX(x,y,1)+ sY(x,y,1)+sLXY(x,y,1)+sRXY(x,y,1);
    var blackScore = sX(x,y,2)+sY(x,y,2)+sLXY(x,y,2)+sRXY(x,y,2);;
    var totalScore = whiteScore+blackScore;
    return totalScore;
}
function getPosition(){
    var pos = new Array(2);
    var tmp = 0;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            if(chessData[i][j]==0){          //找到可以落子的空位
                if(computedScore(i,j)>tmp){
                    tmp = computedScore(i,j);
                    pos[0]=i;
                    pos[1]=j;
                }
            }
        }
    }
    return pos;
}

function TurnForAI(){
  var pos = getPosition();
  doCheck(pos[0],pos[1]);
}
function sX(x,y,num) {     //num 1 白 2黑
    var death = 0;
    var count = 0;
    var tmpRecord = new Array(10);
    // var tmpRecord = window.chessData.concat();
    for (let i = 0; i < 10; i++) {
        tmpRecord[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
            tmpRecord[i][j] = chessData[i][j];
        }
    }
    tmpRecord[x][y] = num;  //假设这个位落 num对应颜色的旗子
    for (var i = x; i >= 0; i--) {      //x负半轴
        if (tmpRecord[i][y] === num) {
            count++;
        } else if (tmpRecord[i][y] === 0) {
            break;
        } else {
            death++;
            break;
        }
    }
    for(var i=x;i<10;i++){      //x+半轴
            if(tmpRecord[i][y]==num){
                count++;
            }else if(tmpRecord[i][y]===0){
                break;
            }else{
                death++;
                break;
            }
        }
    count--;
    return score(count,death);
}
function sY(x,y,num){     //num 1 白 2黑
    var death = 0;
    var count = 0;
    var tmpRecord = new Array(10);
    // var tmpRecord = window.chessData.concat();
    for(let i=0;i<10;i++){
        tmpRecord[i]= new Array(10);
        for(let j=0;j<10;j++){
            tmpRecord[i][j] = chessData[i][j];
        }
    }
    tmpRecord[x][y]=num;  //假设这个空位落 num对应颜色的旗子
    for(var i=y;i>=0;i--){      //Y负半轴
        if(tmpRecord[x][i]===num){
            count++;
        }else if(tmpRecord[x][i]===0){
            break;
        }else{
            death++;
            break;
        }
    }
    for(var i=y;i<10;i++){      //Y正半轴
            if(tmpRecord[x][i]==num){
                count++;
            }else if(tmpRecord[x][i]===0){
                break;
            }else{
                death++;
                break;
            }
        }
    count--;
    return score(count,death);
}

function sLXY(x,y,num){    //左斜轴
    var death = 0;
    var count = 0;
    var tmpRecord = new Array(10);
    // var tmpRecord = window.chessData.concat();
    for(let i=0;i<10;i++){
        tmpRecord[i]= new Array(10);
        for(let j=0;j<10;j++){
            tmpRecord[i][j] = chessData[i][j];
        }
    }
    tmpRecord[x][y]=num;  //假设这个空位落 num对应颜色的旗子
    for(var i=x,j=y;i>=0&&j>=0;i--,j--){      //X负半轴 Y正半轴
        if(tmpRecord[i][j]===num){
            count++;
        }else if(tmpRecord[i][j]===0){
            break;
        }else{
            death++;
            break;
        }
    }
    for(var i=x,j=y;i<10;i++,j++){      //X正半轴 Y负半轴
            if(tmpRecord[i][j]==num){
                count++;
            }else if(tmpRecord[i][j]===0){
                break;
            }else {
                death++;
                break;
            }
    }
    count--;
    return score(count,death);
}

function sRXY(x,y,num){    //右斜轴
    var death = 0;
    var count = 0;
    var tmpRecord = new Array(10);
    // var tmpRecord = window.chessData.concat();
    for(let i=0;i<10;i++){
        tmpRecord[i]= new Array(10);
        for(let j=0;j<10;j++){
            tmpRecord[i][j] = chessData[i][j];
        }
    }
    tmpRecord[x][y]=num;  //假设这个空位落 num对应颜色的旗子
    for(var i=x,j=y;i<=9&&j>=0;i++,j--){      //X正半轴 Y正半轴
            if(tmpRecord[i][j]===num){
                count++;
            }else if(tmpRecord[i][j]===0){
                break;
            }else{
                death++;
                break;
            }

    }
    for(var i=x,j=y;i>=0&&j<=9;i--,j++){      //X负半轴 Y负半轴
            if(tmpRecord[i][j]==num){
                count++;
            }else if(tmpRecord[i][j]===0){
                break;
            }else{
                death++;
                break;
            }
    }
    count--;
    return score(count,death);
}

function score(count,death){
    var score = 0;
    if(death===2){
        return 0;
    }
    if(count===5){
        score = LEVEL_SIX;
    }else if(count===4&&death===0){  //活4
        score= LEVEL_FIVE;
    }else if((count===4&&death===1)||(count === 3&&death===0)){         //死4 或者眠3
        score= LEVEL_FOUR;
    }else if((count===3&&death===1)||(count === 2&&death===0)){                         //死3  活2
       score= LEVEL_THREE;
    }else if((count===2&&death===1)||(count === 1&&death===1)){                        //死2 眠1
        score= LEVEL_TWO;
    }
    return score;
}

// console.log("count" + count + "death" + death);




