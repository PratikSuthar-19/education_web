//
window.addEventListener('scroll', ()=>{
   document.querySelector('nav').classList.toggle
   ('window_scroll', window.scrollY > 0);
});



const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus"
        }else{
            icon.className ='fa-solid fa-plus';
        }
    })
})

const nav_menu = document.querySelector('.nav_menu');
const open_btn = document.querySelector('.open_menu_btn');
const close_btn = document.querySelector('.close_menu_btn');

open_btn.addEventListener('click', ()=>{
     nav_menu.style.display ="flex";
     open_btn.style.display="none";
     close_btn.style.display="inline-block";
})

close_btn.addEventListener('click', ()=>{
    nav_menu.style.display ="none";
    open_btn.style.display="inline-block";
    close_btn.style.display="none";

})