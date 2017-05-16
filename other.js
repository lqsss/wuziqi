/**
 * Created by liqiushi on 2017/5/15.
 */
//start
function newGame(){
    location.reload();
}
function record(color,x,y){
    var record= document.getElementsByClassName("record");
    record[0].scrollTop= record[0].scrollHeight;
    var recordUl = document.getElementsByTagName("ul");
    var recordList =document.createElement("li");
    if(color==="black")
    {
        blackHand++;
        recordList.innerHTML="黑方:"+blackHand+"手 "+x+","+y;
    }else{
        whiteHand++;
        recordList.innerHTML="白方:"+whiteHand+"手 "+x+","+y;
    }
    recordUl[0].appendChild(recordList);
}
