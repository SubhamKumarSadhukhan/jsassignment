function findsum(n=document.querySelector(".findSum")){
    var x=0;
    for (var i=1,n1=Number(n.value);i<=n1;i++)
    x+=i;
    n.value="Answer is :"+String(x);
    return x;
}
function sumOfSquare(n=document.querySelector(".sumOfSquare")){
    var x=0;
    for (var i=1,n1=Number(n.value);i<=n1;i++)
    x=x+(i*i);
    n.value="Answer is :"+String(x);
    return x;
}
function checkPrime(m){
    var x=0;
    if(m==2){
        return 1;
    }
    else{
    for(var i=2;i<m;i++){
        if (m%i===0){
            return 0;
        }
    }
    return 1;
}
}
function findMax(){
    originalString = document.querySelector(".findMax").value;   
    separatedArray = [];   
    var previousIndex = 0,separated="";                       
    for(i = 0; i <=originalString.length; i++)   
    {   
    if (originalString[i] ==',') {   
            separated = originalString.slice(previousIndex, i);   
            separatedArray.push(separated);                             
        previousIndex = i + 1;            
        }   
    }   
    if(Number(separatedArray[0])>=Number(separatedArray[1])&&Number(separatedArray[0])>=Number(separatedArray[2])){
    document.querySelector(".findMax").value=String(separatedArray[0]);
    }
    else if(Number(separatedArray[1])>Number(separatedArray[0])&&Number(separatedArray[1])>Number(separatedArray[2])){
    document.querySelector(".findMax").value=String(separatedArray[1]);
    }
    else{
        document.querySelector(".findMax").value=String(separatedArray[2]);
    }
}
function findPrimeSum(n=document.querySelector(".findPrimeSum")){
    var n1=Number(n.value),x=0;
    for(var i=2;i<=n1;i++){
        if(checkPrime(i)){
            x=x+i;
        }
    }
    n.value="Answer is :"+String(x);
}
function findGCD(){
    originalString = document.querySelector(".findGCD").value;   
    separatedArray = [];   
    var previousIndex = 0,separated="";                       
    for(i = 0; i <=originalString.length; i++)   
    {   
    if (originalString[i] ==',') {   
            separated = originalString.slice(previousIndex, i);   
            separatedArray.push(separated);                             
        previousIndex = i + 1;            
        }   
    }   
    var x=Number(separatedArray[0]);
    var y=Number(separatedArray[1]);
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    document.querySelector(".findGCD").value=String(x);
  }