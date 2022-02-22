function click1(){
    var x = Number(document.getElementById("number").value);
    var y = Number(document.getElementById("number2").value);

    while (x<=y) 
    {
       var f = 0; 
       for(var i = 2 ; i <= (x/2) ; i++)
       {
           if(x%i == 0)
           {
               f = 1;
               break;
           }
       }
       if(f == 0)
        document.write(x + " ")
       x = x + 1
    }
}