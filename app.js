console.log("Linked")
let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
    let birth = document.getElementById("birthday").value
    let luckyNo = document.getElementById("luckyNo").value
    let repBirth = birth.replaceAll("-","")
    let sum = 0;
    for(let i = 0; i<repBirth.length;i++){
        sum = sum + Number(repBirth.charAt(i))
    }
    //console.log(calculatedAns)
    if(sum%luckyNo === 0){
        //console.log()
        document.getElementById("dispLuck").innerHTML = "Your Birthday is Lucky! "
    }else{
        document.getElementById("dispLuck").innerHTML = "Your Birthday is Not Lucky! "
        //console.log("Uff your birthday is not lucky! ")
    }
})
