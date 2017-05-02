var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.background = "white";
     document.getElementById("sign").style.display="block";
     document.getElementsByClassName("nav-ul")[0].style.color="black";
     document.getElementById("nav-header").style.color="#4c484b";
     document.getElementById("img-logo").src="assets/img/logo-pink.png";
   } else { 
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
       document.getElementById("nav-header").style.background = "";
      document.getElementById("img-logo").src="assets/img/logo-white.png";
      document.getElementsByClassName("nav-ul")[0].style.color="white";
          document.getElementById("sign").style.display="none";
     }
   }
   lastScrollTop = currentScroll;
}, false);

function displayFocus(){
document.getElementById("view").style.display="block"; 
}
  var clases =document.getElementsByClassName("input");
  var phone = document.getElementById("phone").value;
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var city=document.getElementById("city").value;

   // clases[0].classList.remove("error");
document.getElementById("enviar").addEventListener("click", function(e){
  if (phone.length == 0) {
    clases[0].classList.add("error");
  }
  if (name.length == 0) {
    clases[1].classList.add("error");
  }
  if (email.length == 0) {
    clases[2].classList.add("error");
  }
  if (city.length == 0) {
    clases[3].classList.add("error");
  }
});



