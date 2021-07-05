
    alert("hello! I am an alert box!");
  function calc(op)
  {
      var a=document.getElementById("ip1").value;
      var b=document.getElementById("ip2").value;
      var c=document.getElementById("ip3").value;
      var d;
    if(op=='ADD')
    {
         d=Number(a)+Number(b)+Number(c);
    }
  
else if(op=='SUB')
    {
         d=a-b-c;
    }
    else if(op=='MUL')
    {
         d=a*b*c;
    }
    else
    {
        d=a/b/c;
    }
document.getElementById("result").innerHTML=d;

  }