const moon = document.querySelector(".dark i");
const body = document.querySelector("body");
const sun = document.querySelector(".fa-sun");

let a = gsap.timeline();


a.from(".left-sec",{
   x:-500,
   duration:1,
   stagger:1
})


a.from(".right-sec img",{
        x:700,
        duration:1
})

let num = 0;
moon.addEventListener("click",function(){
      
        if(num==0){
                body.style.backgroundColor = "black";
                body.style.color = "white";
                body.style.transition = "0.3s all ease"
                num=1;
        }else
        {
                body.style.backgroundColor = "white";
                body.style.color = "black";
                body.style.transition = "0.3s all ease"
                num=0;
        }

      


})
