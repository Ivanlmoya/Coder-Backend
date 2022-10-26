const div = document.querySelectorAll(".option")

div.forEach(e =>{
    e.addEventListener("click", function(){
        document.querySelectorAll(".option").forEach(s =>{s.classList.remove("active")})
        this.classList.toggle("active")
    })
})
    


