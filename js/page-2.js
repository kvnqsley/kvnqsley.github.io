import { setYearly,setMonthly, addonsYearly,addonsMonthly } from "./utils.js";
(function () {
   

    const back=document.querySelector('.back-btn')
    const monthly=document.querySelector('.monthly');
    const yearly=document.querySelector('.yearly');
    const card1=document.querySelector('.card-1');
    const card2=document.querySelector('.card-2');
    const card3=document.querySelector('.card-3');
    const activeCard=document.querySelector('.active-card');
    const toggle =document.querySelector('.toggle span');
    
    //trigger the next button with  enter key
    window.addEventListener('keypress',(e)=>{
        if (e.key=='Enter') {
            document.querySelector('.btn-link').click()
        }
    })
    back.addEventListener('click',()=>{
        history.back()
        
    
    })
    
    toggle.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active-toggle');
    monthly.classList.toggle('active-color');
    yearly.classList.toggle('active-color');
    
    if (yearly.classList.contains('active-color')===true) {
        setYearly();
        addonsYearly();
    }
    else if (yearly.classList.contains('active-color')===false) {
       setMonthly();
       addonsMonthly();
    }
    });
    
    
    
    //card effects
    window.addEventListener('DOMContentLoaded',()=>{
        localStorage.clear()
        if (yearly.classList.contains('active-color')===false) {
            setMonthly();
            addonsMonthly()
         }
         localStorage.setItem('package','Arcade');
        
    })
    card1.addEventListener('click',(e)=>{
        activeCard.style.transform='translateX(0)';
        e.currentTarget.style.border='none';
        localStorage.setItem('package','Arcade')
    
        })
    card2.addEventListener('click',(e)=>{
    activeCard.style.transform='translateX(10em)';
    e.currentTarget.style.border='none';
    localStorage.setItem('package','Advanced')
    
    })
    card3.addEventListener('click',(e)=>{
        activeCard.style.transform='translateX(20em)';
        e.currentTarget.style.border='none';
        localStorage.setItem('package','Pro')
        
        });
         
})()