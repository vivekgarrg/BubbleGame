makeBubble(50);

function makeBubble(bubbles){
    for(let i=0; i<bubbles; i++){
        var col=getRandomColor();
        var btn = document.createElement("button");
        btn.id = "bubble"+i+"";
        btn.className = "bubble";
        btn.style ="background-color:"+col;
        document.body.appendChild(btn);
    }
}

function getRandomColor()
{
 var letters='0123456789ABCDEF';
 var color = "#";

 for(var i=0; i<8; i++){
     color += letters[Math.floor(Math.random()*16)]
 }
 return color;
}


let score = 0;
for(i=1; i<=30;i++){
    let id = "bubble"+i;
    document.getElementById(id).onclick = evt =>{
        if(evt.target.style.visibility = "hidden")
        {
            score +=1;
            console.log(score);
        }
        document.getElementById("score_final").innerHTML = score;
    }
}

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
seconds--;
document.getElementById("countdown").textContent = seconds;
if(seconds == 0) clearInterval(countdown);
if(seconds === 0){alert("Timeout!! Score: "+score)}
},1000)