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