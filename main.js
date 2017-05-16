/**
 * Created by liqiushi on 2017/5/15.
*/
window.chessData=new Array(10);

for(var i=0;i<10;i++){
    chessData[i] = new Array(10);
}
for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        chessData[i][j]=0;
    }
}
window.totalStep = 100;
window.isWhite = false; //默认黑棋先手
window.winner = "";
window.blackHand = 0;
window.whiteHand = 0;