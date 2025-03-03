function funkcio(){
    var x = document.getElementById("feladat1").value;
    if (x.toUpperCase() == "A") {
        document.getElementById("megoldas1").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas1").innerHTML = "Helytelen";
    }
}

function funkcio2(){
    var x = document.getElementById("feladat2").value;
    if (x.toUpperCase() == "2FC") {
        document.getElementById("megoldas2").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas2").innerHTML = "Helytelen";
    }
}

function funkcio3(){
    var x = document.getElementById("feladat3").value;
    if (x.toUpperCase() == "61C") {
        document.getElementById("megoldas3").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas3").innerHTML = "Helytelen";
    }
}

function funkcio4(){
    var x = document.getElementById("feladat4").value;
    if (x.toUpperCase() == "155A1") {
        document.getElementById("megoldas4").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas4").innerHTML = "Helytelen";
    }
}

function funkcio5(){
    var x = document.getElementById("feladat5").value;
    if (x.toUpperCase() == "6") {
        document.getElementById("megoldas5").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas5").innerHTML = "Helytelen";
    }
}

function funkcio6(){
    var x = document.getElementById("feladat6").value;
    if (x.toUpperCase() == "10F903") {
        document.getElementById("megoldas6").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas6").innerHTML = "Helytelen";
    }
}

function funkcio7(){
    var x = document.getElementById("feladat7").value;
    if (x.toUpperCase() == "99999112999") {
        document.getElementById("megoldas7").innerHTML = "Helyes";
    }
    else {
        document.getElementById("megoldas7").innerHTML = "Helytelen";
    }
}



function check(a,b){

    if (a == 'jo'){
    
        document.getElementById(b).innerHTML = "Helyes megoldás";
    
    }
    
    else{
    
        document.getElementById(b).innerHTML = "Helytelen megoldás";
    
    }
    }
    
    
    
    function check2(c,d){
    
        if (c == 'jo'){
        
            document.getElementById(d).innerHTML = "Helyes megoldás";
        
        }
        
        else{
        
            document.getElementById(d).innerHTML = "Helytelen megoldás";
        
        }
        }
    
    
    
    
        function check3(e,f){
    
            if (e == 'jo'){
            
                document.getElementById(f).innerHTML = "Helyes megoldás";
            
            }
            
            else{
            
                document.getElementById(f).innerHTML = "Helytelen megoldás";
            
            }
            }