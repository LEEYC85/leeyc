//宣告圖片 網址
let URLs = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUSzNb-psNK2zhqYY1XfOopTNtnS47oWdQQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TI33JZw9yJ2sV8uak_oXy5NDvPtDOWiWKg&usqp=CAU",
      "https://pic.pimg.tw/disni/1373929398-1197856776_wn.jpg"
]



//網站已載入完成才會跑
$(function(){
  $("input").on("click",function(){
    //alert("hi");
    //$("h1").text("Hello"); 
    let numberOfListItem =$("li").length;
    let randomNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomNumber).text());
    $("img").attr("src",URLs[randomNumber])
    });
});