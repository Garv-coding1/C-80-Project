function joinPara1() {
    var para_1=[];
    for (var i=1; i<=6; i++){
        para_1.push(document.getElementById("para_1_line_"+i).value);
        console.log(para_1);
    }
    console.log(para_1);
   document.getElementById("showPara1").innerHTML=para_1.join(". ");
}

function joinPara2() {
    var para_2=[];
    for (var j=1; j<=6; j++){
        para_2.push(document.getElementById("para_2_line_"+j).value);
        console.log(para_2);
    }
    console.log(para_2);
   document.getElementById("showPara2").innerHTML=para_2.join(". ");
}