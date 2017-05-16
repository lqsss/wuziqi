/**
 * Created by liqiushi on 2017/5/15.
 */
var funcArray = [
    judgeX,
];
function judge(color,x,y){
    funcArray[0](color,x,y);
}
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
    console.log( color+"当前正连子"+position.positiveCount);
    if( position.positiveCount===5){
        alert(color+"win!");
    }else{
        for(var i=1;i<5;i++){
            var px = x-i;
            if(px<0||chessData[px][y]!==tmp){
                break;
            }
            position.negativeCount++;
        }
        console.log( color+"当前负连子"+position.negativeCount);
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