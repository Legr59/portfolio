document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".nav-toggle"),a=document.querySelector(".nav-menu");o&&a&&(o.addEventListener("click",function(){o.classList.toggle("active"),a.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",()=>{o.classList.remove("active"),a.classList.remove("active")})}));const r=document.querySelector(".navbar");window.addEventListener("scroll",function(){window.scrollY>50?r.style.background="rgba(10, 10, 15, 0.95)":r.style.background="rgba(10, 10, 15, 0.85)"}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll('a[href$=".html"]').forEach(t=>{t.addEventListener("click",function(n){const e=this.getAttribute("href");e&&!e.startsWith("http")&&(n.preventDefault(),document.body.classList.add("page-exit"),setTimeout(()=>{window.location.href=e},300))})});const i={threshold:.1,rootMargin:"0px 0px -50px 0px"},c=new IntersectionObserver(t=>{t.forEach((n,e)=>{n.isIntersecting&&setTimeout(()=>{n.target.classList.add("animate-in")},e*100)})},i);document.querySelectorAll(".link-card, .highlight-card, .content-card, .timeline-item").forEach(t=>{t.style.opacity="0",t.style.transform="translateY(30px)",t.style.transition="opacity 0.6s ease, transform 0.6s ease",c.observe(t)});const s=document.createElement("style");s.textContent=`
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .page-exit {
            opacity: 0 !important;
            transform: translateY(-10px) !important;
            transition: opacity 0.3s ease, transform 0.3s ease !important;
        }
        .page-enter {
            animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes fadeSlideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `,document.head.appendChild(s),document.body.classList.add("page-enter")}),window.addEventListener("pageshow",function(){document.body.classList.remove("page-exit"),document.body.style.opacity="1",document.body.style.transform="translateY(0)"}),window.addEventListener("popstate",function(){document.body.classList.remove("page-exit"),document.body.style.opacity="1",document.body.style.transform="translateY(0)"}),window.addEventListener("focus",function(){document.body.style.opacity="1",document.body.style.transform="translateY(0)"});
