const mobileNav = document.getElementById("mobileNav");
const pcNav = document.querySelector(".pc-nav");
const dropDown = document.querySelector(".drop-down");
const familySite = document.querySelector(".family-site");
const siteList = document.querySelector(".site-list");

// -----모바일 메뉴 클릭-----
function openNav() {
  mobileNav.style.height = "100%";
};
function closeNav() {
  mobileNav.style.height = "0%";
};

// -----pc 메뉴 hover-----
function showDropDown(){
  dropDown.style.height = "10vw";
};
function closeDropDown(){
  dropDown.style.height = "0%";
};

pcNav.addEventListener("mouseenter", showDropDown);
dropDown.addEventListener("mouseleave", closeDropDown);

// -----footer Family Site 클릭-----
function showSiteList(){
  siteList.classList.toggle("active");
  siteBtn.classList.toggle("active");
};

familySite.addEventListener("click", showSiteList);



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
function scrollTop(){
  window.scrollTo({top:0, left:0, behavior:'smooth'});
};

scrollDown.addEventListener("click", scrollTop);


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

    // -----sub page-----
  $(".section2").on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
  
      if(wheel>0){
        $("#background-text").css("transform", "translateX(-100px)");
        console.log("hi");
        } else {
            $("#background-text").css("transform", "translateX(100px)");
        console.log("bye");
        }
    });