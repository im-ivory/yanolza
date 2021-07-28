const mobileNav = document.getElementById("mobileNav");
const pcNav = document.querySelector(".pc-nav");
const dropDown = document.querySelector(".drop-down");

function openNav() {
    mobileNav.style.height = "100%";
  }
  
  function closeNav() {
    mobileNav.style.height = "0%";
  }

  function showDropDown(){
    dropDown.style.height = "10vw";
  }
  function closeDropDown(){
    dropDown.style.height = "0%";
  }

dropDown.addEventListener("mouseleave", closeDropDown);
 pcNav.addEventListener("mouseenter", showDropDown);

const imgWrapper = document.querySelector(".img-wrapper");
const img = Array.from(imgWrapper.getElementsByTagName("img"));


    function changeOpacity(){
      for (i=0; i<img.length; i++){
        let imgRect = img[i].getBoundingClientRect();

        if(window.innerWidth > 767){
          if(imgRect.x > 362){
            img[i].style.opacity =1;
          }else if(imgRect.x < 300){
            img[i].style.opacity =0.5;
           } else if(imgRect.x < 23){
              img[i].style.opacity =0.2;
          }
        }else{
          img[i].style.opacity = 1;
        }
      }
    }


  imgWrapper.addEventListener("scroll", changeOpacity);


const scrollDown = document.querySelector(".scroll-down");

      window.addEventListener('scroll', function(){
        if(window.scrollY > 112){      
        scrollDown.childNodes[3].style.display ="none";
        scrollDown.classList.add("topBtn");
        } else if(window.scrollY < 112){
          scrollDown.childNodes[3].style.display ="block";
          scrollDown.classList.remove("topBtn");
        }
      });


      function scrollTop(){
        window.scrollTo({top:0, left:0, behavior:'smooth'});
     }

      scrollDown.addEventListener("click", scrollTop);