const mobileNav = document.getElementById("mobileNav");
const header = document.querySelector(".header");
const pcNav = document.querySelector(".pc-nav");
const dropDown = document.querySelector(".drop-down");
const familySite = document.querySelector(".family-site");
const siteList = document.querySelector(".site-list");
const siteBtn = familySite.querySelector(".title img");

// -----모바일 메뉴 클릭-----
function openNav() {
  mobileNav.style.height = "100%";
};
function closeNav() {
  mobileNav.style.height = "0%";
};

// -----pc 메뉴 hover-----
function showDropDown(){
  if (header.classList.contains("white") == true){
    dropDown.style.height = "10vw";
  }else{
    dropDown.style.height = "15vw";
    pcNav.classList.add("black");
  }
};



function closeDropDown(){
  dropDown.style.height = "0%";
  pcNav.classList.remove("black");
};


$(window).scroll(function () { 
  var scrollValue = $(document).scrollTop(); 
  if(scrollValue > 650){
    $(".header").addClass("white");
    $(".header .drop-down").addClass("white");
  }else{
    $(".header").removeClass("white");
    $(".header .drop-down").removeClass("white");
  }
 });



header.addEventListener("mouseenter", showDropDown);
header.addEventListener("mouseleave", closeDropDown);

// -----footer Family Site 클릭-----
function showSiteList(){
  siteList.classList.toggle("active");
  siteBtn.classList.toggle("active");
};

familySite.addEventListener("click", showSiteList);


// -----section3 스크롤에 따라 이미지 투명도 조절-----
const imgWrapper = document.querySelector(".img-wrapper");
const img = Array.from(imgWrapper.getElementsByTagName("img"));

function changeOpacity(){
  for (i=0; i<img.length; i++){
    let imgRect = img[i].getBoundingClientRect();

    if(window.innerWidth > 767){
      if(imgRect.x > 362){
        img[i].style.opacity =1;
      }else if(imgRect.x < 300){
        img[i].style.opacity =0.3;
      }
    }else{
      img[i].style.opacity = 1;
    }
  };
};

imgWrapper.addEventListener("scroll", changeOpacity);


// -----스크롤 다운 버튼 바뀌게 하기-----
const scrollDown = document.querySelector(".scroll-down");

window.addEventListener('scroll', function(){
  if(window.scrollY > 112){      
    scrollDown.childNodes[3].style.display ="none";
    scrollDown.classList.add("topBtn");
  }else if(window.scrollY < 112){
    scrollDown.childNodes[3].style.display ="block";
    scrollDown.classList.remove("topBtn");
  }
});


// -----스크롤 탑 버튼-----
// function scrollTop(){
//   window.scrollTo({top:0, left:0, behavior:'smooth'});
// };

// scrollDown.addEventListener("click", scrollTop);


$(".scroll-down").on('click',function(){
  $( 'html, body' ).stop().animate( { scrollTop : 0 } )
  $(".header").css("top", "0");
  });


// -----pc 메뉴 스크롤 감지에 따라 보이기-----
$("html").on('mousewheel',function(e){
  var wheel = e.originalEvent.wheelDelta;

  if($(window).width() >768) { 
    if(wheel>0){
      $(".header").css("top", "0");
      } else {
      $(".header").css("top",- $(".header").height() + "px");
      }
     }
  });



  jQuery(document).ready(function() {
    setTimeout(function(){
      $( ".banner .wrapper" ).addClass( "active" );
      $( ".banner .wrapper h1" ).css("visibility", "visible");
    }, 800)

 });