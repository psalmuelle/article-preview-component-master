"strict mode";
const shareBtn = document.querySelector("#share--button")
const popUp = document.querySelector(".pop-up")

shareBtn.addEventListener("click", (e)=>{
   
    popUp.classList.toggle("visibility");
    if (popUp.classList.contains("visibility")){

        shareBtn.style.background = "hsl(212, 23%, 69%)"
    }else{
        shareBtn.style.background ="hsl(210, 46%, 95%)"
    }
})