function calc(){   
    let x = new Number(document.getElementById("number1").value);
    console.log(typeof number1);

    let y = new Number(document.getElementById("number2").value);
    console.log(typeof number2);

    let operater = document.getElementById("operater").value;
   
    switch(operater){
        case "+":alert (x+y);break;
        case "-":alert (x-y);break;
        case "/":alert (x/y);break;
        case "*":alert (x*y);break;
        default: alert ("INVALIDE INPUT");
    }

}
   