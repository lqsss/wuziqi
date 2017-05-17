/**
 * Created by liqiushi on 2017/5/15.
 */
//start

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

var start =document.getElementsByClassName("start")[0];
start.onclick=function newGame(){
    if(!window.localStorage){
        alert("浏览器不支持localStorage");
        return false;
    }else{
        flag = selectModel[0];
        window.localStorage.__flag__=flag;
    }
    location.reload();
};
var AIstart =document.getElementsByClassName("AI-start")[0];
AIstart.onclick = function(){
    if(!window.localStorage){
        alert("浏览器不支持localStorage");
        return false;
    }else{
        flag = selectModel[1];
        window.localStorage.__flag__=flag;
    }
    location.reload();
};