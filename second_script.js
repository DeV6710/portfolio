let inp = document.getElementsByClassName("inps")
let submitt = document.getElementById("bt")
let form = document.querySelector("form")
let thankyou = document.getElementById("thankyou")
submitt.addEventListener("click",function (e){
    e.preventDefault();

    let allFilled = true;

    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value.trim() === "") {
            inp[i].style.border = "2px solid red";
            allFilled = false;
        } else {
            inp[i].style.border = "";
        }
    }

    if (!allFilled) {
        alert("Please fill all the inputs");
        return;
    }

    // Success – all fields are filled
    let name = inp[0].value;
    form.style.display = "none";
    thankyou.textContent = `Thank you for submitting, ${name} ❤️🌹`;
    thankyou.style.color = "white";
    thankyou.style.margin = "250px auto";
})
