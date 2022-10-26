const div = document.querySelectorAll(".option")

for (let i=0 ; i < div.length; i++){
    console.log(div[i].classList)
    div[i].addEventListener("click", function(){
        div[i].classList.toggle("active")
    })
}


