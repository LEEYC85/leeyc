let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv =document.getElementsByTagName("div")[0];
//let pre_pos_x=e.clientX;
//let pre_pos_y=e.clientY;


//滑鼠進入div區域觸發
function mouseIn(){
    thisH1.innerHTML="你進來了";
}
//滑鼠移出div區域觸發
function mouseOut(){
    thisH1.innerHTML="你出來了";
    thisP.innerHTML="";
}
//滑鼠在div區域移動時顯示
function mouseMove(e){
    // debugger
    //console.log(e.clientX+ "," +e.clientY)
    thisP.innerHTML="你在裡面走來走去,位置: " +e.clientX + "," + e.clientY;
    /*
    if(pre_pos_x < e.clientX)
    {
        thisP.innerHTML="你在裡面走來走去,位置: " +e.clientX + "," + e.clientY + "往右";
    }else if(pre_pos_x > e.clientX){
        thisP.innerHTML="你在裡面走來走去,位置: " +e.clientX + "," + e.clientY + "往左";
    }
    */
        
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);
