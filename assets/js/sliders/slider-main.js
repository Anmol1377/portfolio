const slider_Main=()=>{if(!document.body.querySelector(".main-slider")||!document.body.querySelector(".slider-thumbs"))return;const e=new Swiper(".slider-thumbs",{preventClicks:!1,centeredSlides:!0,speed:600,parallax:!0,slidesPerView:1,effect:"creative",creativeEffect:{perspective:!0,limitProgress:6,prev:{translate:["-95%","5%",0],scale:.8,rotate:[0,0,-18],opacity:.5,origin:"bottom"},next:{translate:["95%","5%",0],scale:.8,rotate:[0,0,18],opacity:.3,origin:"bottom"}},pagination:{enabled:!1},breakpoints:{1367:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:1.5},576:{slidesPerView:1}}}),r=new Swiper(".main-slider",{slidesPerView:6,speed:600,centeredSlides:!0,spaceBetween:0,grabCursor:!0,mousewheelControl:!0,slideToClickedSlide:!0,mousewheel:{forceToAxis:!0,sensitivity:1,releaseOnEdges:!0},parallax:!0,direction:"vertical",thumbs:{swiper:e},breakpoints:{1367:{slidesPerView:6},992:{slidesPerView:6},768:{slidesPerView:6},576:{slidesPerView:6}}});r.controller.control=e;const s=document.body.querySelector(".slider-scroll .slider-scroll-contact"),i=document.body.querySelector(".slider-scroll .circle-link");r.on("reachEnd",()=>{s.style="bottom:40px",i.classList.add("circle-primary"),i.classList.remove("transparent-on-dark")}),r.on("fromEdge",()=>{s.style="bottom:-180px",i.classList.add("transparent-on-dark"),i.classList.remove("circle-primary")})};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>slider_Main(),1)});