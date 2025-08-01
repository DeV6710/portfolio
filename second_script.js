let inp = document.getElementsByClassName("inps")
let submitt = document.getElementById("bt")
console.log(inp)
submitt.addEventListener("click",function (e){
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == ""){
          inp[i]
           console.log(inp[i].style)
           // alert("Please fill the text " )
            break;
        }
    }
    e.preventDefault()
})
