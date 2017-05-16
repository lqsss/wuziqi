/**
 * Created by liqiushi on 2017/5/15.
 */
var funcArray = [
    judgeX,
    judgeY,
    judgeLXY,
    judgeRXY
];
function judge(color,x,y){
    for(var i = 0;i<4;i++){
        funcArray[i](color,x,y);
    }
}
//判断X轴
function judgeX(color,x,y){
    var position={
        positiveCount:0,
        negativeCount:0
    };
    var tmp = chessData[x][y];
    for(var i=1;i<5;i++){
        var px = x+i;
        if(px>9||chessData[px][y]!==tmp){
            break;
        }
        position.positiveCount++;
    }
    console.log( color+"当前X轴正连子"+position.positiveCount);
    if( position.positiveCount===4){
        alert(color+"win!");
        return true;
    }else{
        for(var i=1;i<5;i++){
            var px = x-i;
            if(px<0||chessData[px][y]!==tmp){
                break;
            }
            position.negativeCount++;
        }
        console.log( color+"当前X轴负连子"+position.negativeCount);
    }
    if(isFive(position.negativeCount,position.positiveCount)){
        alert(color+"win!");
        return true;
    }
}
//判断Y轴
function judgeY(color,x,y){
    var position={
        positiveCount:0,
        negativeCount:0
    };
    var tmp = chessData[x][y];
    for(var i=1;i<5;i++){
        var py = y+i;
        if(py>9||chessData[x][py]!==tmp){
            break;
        }
        position.positiveCount++;
    }
    console.log( color+"当前Y轴正连子"+position.positiveCount);
    if( position.positiveCount===4){
        alert(color+"win!");
        return true;
    }else{
        for(var i=1;i<5;i++){
            var py = y-i;
            if(py<0||chessData[x][py]!==tmp){
                break;
            }
            position.negativeCount++;
        }
        console.log( color+"当前Y轴负连子"+position.negativeCount);
    }
    if(isFive(position.negativeCount,position.positiveCount)){
        alert(color+"win!");
        return true;
    }
}
//左斜
function judgeLXY(color,x,y){
    var position={
        positiveCount:0,
        negativeCount:0
    };
    var tmp = chessData[x][y];
    for(var i=1;i<5;i++){
        var px =x-i;
        var py = y-i;
        if(px<0||py>9||chessData[px][py]!==tmp){
            break;
        }
        position.positiveCount++;
    }
    console.log( color+"当前LXY轴正连子"+position.positiveCount);
    if( position.positiveCount===4){
        alert(color+"win!");
        return true;
    }else{
        for(var i=1;i<5;i++){
            var px = x+i
            var py = y+i;
            if(px>9||py>9||chessData[px][py]!==tmp){
                break;
            }
            position.negativeCount++;
        }
        console.log( color+"当前LXY轴负连子"+position.negativeCount);
    }
    if(isFive(position.negativeCount,position.positiveCount)){
        alert(color+"win!");
        return true;
    }
}
//右斜
function judgeRXY(color,x,y){
    var position={
        positiveCount:0,
        negativeCount:0
    };
    var tmp = chessData[x][y];
    for(var i=1;i<5;i++){
        var px =x+i;
        var py = y-i;
        if(px>9||py<0||chessData[px][py]!==tmp){
            break;
        }
        position.positiveCount++;
    }
    console.log( color+"当前RXY轴正连子"+position.positiveCount);
    if( position.positiveCount===4) {
        alert(color + "win!");
        return true;
    }
    else{
        for(var i=1;i<5;i++){
            var px = x-i
            var py = y+i;
            if(px>9||py>9||chessData[px][py]!==tmp){
                break;
            }
            position.negativeCount++;
        }
        console.log( color+"当前RXY轴负连子"+position.negativeCount);
    }
    if(isFive(position.negativeCount,position.positiveCount)){
        alert(color+"win!");
        return true;
    }
}

function isFive(a,b){
    var result = a+b;
    if(result ===4){
        return true;
    }
    return false;
}