const shape1="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z",shape2="M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z",shape3="M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz";let finishLoading=!1;const initializePreloader=()=>{if("undefined"==typeof gsap)return;const e=document.querySelector(".preloader");if(!e)return;document.documentElement.style.overflow="hidden";const t=document.querySelector(".wave"),o=t.querySelector("path"),r=gsap.timeline({repeat:-1,repeatDelay:.1,defaults:{ease:"linear"}});gsap.set(".preloader #target1, .preloader #target2, .preloader #target3",{rotation:40,svgOrigin:"83 63",opacity:0}),r.to(".preloader #target3",{attr:{y2:25,y1:85},opacity:1}).to(".preloader #target2",{attr:{y2:42,y1:102},opacity:1}).to(".preloader #target1",{attr:{y2:58,y1:119},opacity:1}).to(".preloader #target3",{attr:{y2:85,y1:85},opacity:1,delay:.08}).to(".preloader #target2",{attr:{y2:102,y1:102},opacity:1}).to(".preloader #target1",{attr:{y2:119,y1:119},opacity:1,onComplete:()=>{if(!finishLoading)return;r.pause(),e.style="opacity:0;transition: opacity 1s ease;",setTimeout(()=>{e.remove(),document.documentElement.style.removeProperty("overflow")},1e3);const l=gsap.timeline({paused:!0,reversed:!0});gsap.set(t,{display:"flex"}),gsap.set(o,{attr:{d:shape3},fill:"#181818"}),l.to(t,{display:"flex",ease:"none"}).to(o,{attr:{d:shape2},fill:"#181818",duration:.8,ease:"none",delay:.08}).to(o,{attr:{d:shape1},fill:"#181818",duration:.2,ease:"none"}).to(t,{display:"none",ease:"none"}),l.play(),r.kill()}})},initializeLinkCircle=()=>{let e=0;const t=document.body.querySelectorAll(".circle-inner > svg"),o=o=>{t.forEach(t=>{e=o.deltaY>0?e+15:e-15,t.style=`display:block;transform:rotate(${e}deg)`})};window.addEventListener("load",()=>{t.forEach(t=>t.style=`display:block;transform:rotate(${e}deg)`)}),window.addEventListener("wheel",e=>o(e))},initializeSmoothScrollbar=(e="#evneWrapper",t={damping:.1,stagger:!1,invalidateOnRefresh:!0,alwaysShowTracks:!0,renderByPixels:!0})=>{if("undefined"==typeof Scrollbar)return;if("undefined"==typeof enableSmoothScroll)return;if(!enableSmoothScroll)return;if(!window.scrollbars||!window.ScrollTrigger)return;const o=document.querySelector(e);if(!o)return;document.body.style.overflow="hidden",document.body.style.height="100vh",o.style.overflowY="auto",o.style.height="100vh";const r={...t,delegateTo:o},l=Scrollbar.init(o,r);ScrollTrigger.scrollerProxy(o,{scrollTop(e){return arguments.length&&(l.scrollTop=e),l.scrollTop}}),l.addListener(ScrollTrigger.update),ScrollTrigger.defaults({scroller:o})},initializeMenu=()=>{if("undefined"==typeof gsap)return;const e=document.body.querySelector(".menu");if(!e)return;const t=gsap.timeline({paused:!0,reversed:!0}),o=e.querySelector(".site-nav"),r=document.querySelector(".wave"),l=r.querySelector("path"),n=o.querySelector(".nav-list"),a=n.querySelectorAll(".social-links li"),s=n.querySelectorAll(".links li");gsap.set(r,{display:"none",duration:0,ease:"ease"}),gsap.set(l,{attr:{d:shape1}}),gsap.set(a,{autoAlpha:0}),t.to(r,{display:"flex",duration:0,ease:"ease"}),t.to(l,{attr:{d:shape2},fill:"#181818",duration:.5,ease:"sine.in"}),t.to(l,{attr:{d:shape3},fill:"#181818",duration:.8,ease:"sine.out"}),t.to(l,{fill:"#1e2024",duration:.15,ease:"none"}),t.to(n,{autoAlpha:0,duration:0,ease:"none"}),t.to(n,{display:"flex",duration:0,ease:"none"}),t.to(n,{autoAlpha:1,duration:.4,ease:"none"}),t.to(r,{autoAlpha:0,duration:.3,ease:"none"}),t.to(r,{display:"none",duration:.3,ease:"none"}),t.fromTo(a,{autoAlpha:0,y:"-20px",ease:"none"},{autoAlpha:1,y:"0px",duration:.15,stagger:.15}),t.fromTo(s,{autoAlpha:0,y:"-20px",ease:"none"},{autoAlpha:1,y:"0px",duration:.15,stagger:.15});const i=e.querySelector(".nav-toggle");i.addEventListener("click",()=>{const o=document.getElementsByTagName("html")[0],r=e.querySelector(".nav-links");r.classList.toggle("open"),r.classList.contains("open")&&(e.style.removeProperty("background-color"),e.style.removeProperty("height"));const l=e.querySelector(".scrolldiv");l.scrollTo({top:0,left:0,behavior:"smooth"}),t.reversed()?(o.style.overflow="hidden",t.timeScale(1).play()):(t.timeScale(2).reverse(),o.style.removeProperty("overflow"))}),s.forEach(e=>e.addEventListener("click",e=>e.preventDefault()));let c=0;if("undefined"!=typeof Scrollbar&&enableSmoothScroll){const t=Scrollbar.get(document.querySelector("#evneWrapper"));t.addListener(()=>{const o=t.scrollTop,r=o-c;e.style.top=r>0?"-131px":"0",c=o,o>131?(e.style.backgroundColor="#1e2024",e.style.height="65px"):(e.style.removeProperty("background-color"),e.style.removeProperty("height"))})}else window.addEventListener("scroll",()=>{const t=window.scrollY,o=t-c;e.style.top=o>0?"-131px":"0",c=t,t>131?(e.style.backgroundColor="#1e2024",e.style.height="65px"):(e.style.removeProperty("background-color"),e.style.removeProperty("height"))});window.addEventListener("beforeunload",()=>t.kill())},setLinks=()=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.href;if(o.includes("mailto:"))return void(window.location.href=o);if(!isValidURL(o))return void console.error("Invalid URL:",o);const r=document.querySelector(".wave"),l=r.querySelector("path");setTimeout(()=>{if("undefined"==typeof gsap)return;const e=gsap.timeline({paused:!0,reversed:!0});e.set(l,{attr:{d:shape1}}),e.set(r,{display:"flex",duration:.5,ease:"ease",zIndex:99999999,autoAlpha:1}),e.to(l,{attr:{d:shape2},fill:"#181818",duration:.4,ease:"sine.out"}),e.to(l,{attr:{d:shape3},fill:"#181818",duration:.8,ease:"sine.out"}),e.play()},10),setTimeout(()=>{window.location.href=o},2e3)})})},isValidURL=e=>{if(!e||""===e.trim()||e.startsWith("javascript:")||e.includes(" ")||e.includes("#"))return!1;const t=/^(https?:\/\/|\/|file:\/\/)/;return t.test(e)},cursorFollowerEffect=()=>{if(!enableCursorFollower)return document.querySelector(".cursor").style.display="none",void(document.querySelector(".cursor-follower").style.display="none");const e=()=>{function e(){n+=(r-n)*s,a+=(l-a)*s,t.style.top=`${l}px`,t.style.left=`${r}px`,o.style.top=`${a}px`,o.style.left=`${n}px`,requestAnimationFrame(e)}const t=document.querySelector(".cursor"),o=document.querySelector(".cursor-follower");if(!t||!o)return;let r=0,l=0,n=0,a=0;const s=.15;window.addEventListener("mousemove",e=>{r=e.clientX,l=e.clientY}),e();const i=()=>{const e=document.querySelectorAll("[data-tooltip]");e.length&&e.forEach(e=>{const t=e.getAttribute("data-tooltip");e.addEventListener("mousemove",e=>{o.innerHTML=t,o.classList.add("cursor-tooltip")}),e.addEventListener("mouseleave",()=>{o.innerHTML="",o.classList.remove("cursor-tooltip")})})};i()};e()},mouseTrackingEffect=()=>{if("undefined"==typeof gsap)return;const e=()=>{document.querySelectorAll("[data-follow-mouse]").forEach(e=>{e.classList.add("cursor-none");const t=parseFloat(e.getAttribute("data-follow-mouse")||.5);e.addEventListener("mousemove",o=>{const{left:r,top:l,width:n,height:a}=e.getBoundingClientRect(),s=(o.clientX-r-n/2)*t,i=(o.clientY-l-a/2)*t;gsap.to(e,{x:s,y:i,duration:.6,ease:"power1"})}),e.addEventListener("mouseleave",()=>{gsap.to(e,{scale:1,x:0,y:0,ease:"power3",duration:.6})})})};window.innerWidth>769&&e()},toggleCursorVisibility=()=>{const e=document.querySelector(".cursor"),t=document.querySelector(".cursor-follower"),o=document.querySelectorAll(".cursor-none");e&&t&&o.forEach(o=>{o.addEventListener("mouseenter",()=>{const r=o.getAttribute("data-tooltip");r||(e.style.opacity=0,t.style.opacity=0)}),o.addEventListener("mouseleave",()=>{e.style.opacity=1,t.style.opacity=1})})},initCustomScrollbar=()=>{const e=document.querySelectorAll(".have-scroll");e.forEach(e=>{const t=e.querySelector(".scroll-modern"),o=t.querySelector(".scroll-thumb"),r=()=>{const t=e.clientHeight/e.scrollHeight*100,r=e.scrollTop/e.scrollHeight*100;o.style.height=`${t}%`,o.style.top=`${r}%`};r(),e.addEventListener("scroll",r);let l,n,a=!1;o.addEventListener("mousedown",t=>{a=!0,l=t.clientY,n=e.scrollTop,document.body.style.userSelect="none"}),document.addEventListener("mousemove",t=>{if(!a)return;const o=t.clientY-l,r=e.scrollHeight/e.clientHeight;e.scrollTop=n+o*r}),document.addEventListener("mouseup",()=>{a&&(a=!1,document.body.style.userSelect="")}),o.clientHeight<1&&(o.style.height="33%"),window.addEventListener("resize",r)})},scrollToElement=()=>{document.querySelectorAll("[data-goto-id]").forEach(e=>{const t=()=>{const t=e.getAttribute("data-goto-id");if(!t||["#"," "].includes(t.charAt(0)))return;const o=document.getElementById(t);if(!o)return;const r={top:o.offsetTop,behavior:"smooth"};if(enableSmoothScroll&&"undefined"!=typeof enableSmoothScroll){const e=Scrollbar.get(document.querySelector("#evneWrapper"));e&&e.scrollTo(0,o.offsetTop-window.innerHeight/4,1500)}else window.scrollTo(r)};e.addEventListener("click",t)})};initializeSmoothScrollbar(),document.addEventListener("DOMContentLoaded",()=>{initializePreloader(),setLinks(),initializeMenu(),initializeLinkCircle(),cursorFollowerEffect(),mouseTrackingEffect(),toggleCursorVisibility(),initCustomScrollbar(),scrollToElement(),finishLoading=!0,document.body.classList.add("loaded")});