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

         if(imgRect.x > 362){
            img[i].style.opacity =1;
          }else if(imgRect.x < 300){
            img[i].style.opacity =0.5;
           } else if(imgRect.x < 23){
              img[i].style.opacity =0.2;
          }
      }
    }


  imgWrapper.addEventListener("scroll", changeOpacity);