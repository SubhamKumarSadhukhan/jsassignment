function run() {
    x=prompt("Enter player 1 name.");
    x1=prompt("Enter player 2 name.");
    var randomNumber1=Math.floor(Math.random()*6)+1;


    var randomImageSource="images/dice"+randomNumber1+".png";;

    var img=document.querySelectorAll("img");

    img[0].setAttribute("src",randomImageSource);

    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImageSource1="images/dice"+randomNumber2+".png";
    img[1].setAttribute("src",randomImageSource1);
    if (randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML=x+" win";
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="Draw";
    }
    else{
        document.querySelector("h1").innerHTML=x1+" win";
    }
    document.querySelector(".p1").innerHTML=x;
    document.querySelector(".p2").innerHTML=x1;
}