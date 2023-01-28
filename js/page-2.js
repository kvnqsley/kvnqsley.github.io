const back=document.querySelector('.back-btn')
const monthly=document.querySelector('.monthly');
const yearly=document.querySelector('.yearly');
const card1=document.querySelector('.card-1');
const card2=document.querySelector('.card-2');
const card3=document.querySelector('.card-3');
const activeCard=document.querySelector('.active-card');

//trigger the next button with  enter key
window.addEventListener('keypress',(e)=>{
    if (e.key=='Enter') {
        document.querySelector('.btn-link').click()
    }
})
back.addEventListener('click',()=>{
    history.back()
    

})

const toggle =document.querySelector('.toggle span')
toggle.addEventListener('click',(e)=>{
e.currentTarget.classList.toggle('active-toggle')
monthly.classList.toggle('active-color');
yearly.classList.toggle('active-color')
})

//card effects
window.addEventListener('DOMContentLoaded',()=>{
    localStorage.setItem('package','arcade')
})
card1.addEventListener('click',(e)=>{
    activeCard.style.transform='translateX(0)';
    e.currentTarget.style.border='none';
    localStorage.setItem('package','arcade')

    })
card2.addEventListener('click',(e)=>{
activeCard.style.transform='translateX(10em)';
e.currentTarget.style.border='none';
localStorage.setItem('package','advanced')

})
card3.addEventListener('click',(e)=>{
    activeCard.style.transform='translateX(20em)'
    e.currentTarget.style.border='none'
    localStorage.setItem('package','pro')
    
    })
   