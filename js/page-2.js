import { setYearly,setMonthly, addonsYearly,addonsMonthly } from "./utils.js";
(function () {
   
const btnLink= document.querySelector('.btn-link');
    const back=document.querySelector('.back-btn')
    const monthly=document.querySelector('.monthly');
    const yearly=document.querySelector('.yearly');
    const card1=document.querySelector('.card-1');
    const card2=document.querySelector('.card-2');
    const card3=document.querySelector('.card-3');
    const activeCard=document.querySelector('.active-card');
    const toggle =document.querySelector('.toggle span');
    const allCards=document.querySelectorAll('.fixed');
    const arcadePricing=document.querySelector('.card-1 .pricing');
    const advancedPricing=document.querySelector('.card-2 .pricing');
    const proPricing=document.querySelector('.card-3 .pricing');
    

    const storage={
        arcade:function () {
            return  localStorage.setItem('package','Arcade (Yearly)');
        },
        advanced:function () {
            localStorage.setItem('package','Advanced (Yearly)')
        },
        pro:function () {
            localStorage.setItem('package','Pro (Yearly)')
        }
    }
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
      //  localStorage.setItem('package','Arcade (Yearly)')
      
      //for mobile responsiveness
      if (window.innerWidth<=600) {
            arcadePricing.textContent='$90/yr';
            advancedPricing.textContent='$120/yr';
            proPricing.textContent='$150/yr';
            allCards.forEach(card => {
                const newEl=document.createElement('p');
                const text=document.createTextNode('2 months free')
                newEl.append(text)
                card.appendChild(newEl);
                newEl.setAttribute('class','subtext');
                
                 
            });
        }
    }
    else if (yearly.classList.contains('active-color')===false) {
       setMonthly();
       addonsMonthly();

       if (window.innerWidth<=600) {
        arcadePricing.textContent='$9/mo'
        advancedPricing.textContent='$12/mo';
        proPricing.textContent='$15/mo';
        allCards.forEach(card => {
         const newEl =card.children[3];
         card.removeChild(newEl)
        });
    }
    }
    });
    

    
    //card effects
    window.addEventListener('DOMContentLoaded',()=>{
       //on refresh 
        localStorage.clear();
        if (yearly.classList.contains('active-color')===false) {
            setMonthly();
            addonsMonthly();
            localStorage.setItem('package','Arcade (Monthly)');
         }
        
    })
    //clicking the cards
    card1.addEventListener('click',(e)=>{
        activeCard.style.transform='translateX(0)';
        e.currentTarget.style.border='none';
        localStorage.setItem('package','Arcade (Monthly)')
        if (window.innerWidth<=600) {
            activeCard.style.transform='translateY(0)';
        }
    
        })
    card2.addEventListener('click',(e)=>{
    activeCard.style.transform='translateX(10em)';
    e.currentTarget.style.border='none';
    localStorage.setItem('package','Advanced (Monthly)')
    if (window.innerWidth<=600) {
        activeCard.style.transform='translateY(7em)';
    }
    })
    card3.addEventListener('click',(e)=>{
        activeCard.style.transform='translateX(20em)';
        e.currentTarget.style.border='none';
        localStorage.setItem('package','Pro (Monthly)')
        if (window.innerWidth<=600) {
            activeCard.style.transform='translateY(14em)';
        }
        });

        if (window.innerWidth<=600) {
          
        }
       
        btnLink.addEventListener(
            'click',()=>{
                if (yearly.classList.contains('active-color')===true
                && activeCard.style.transform=='') {
storage.arcade()
            }
            else if (yearly.classList.contains('active-color')===true
            && activeCard.style.transform=='translateX(10em)') {
storage.advanced()
            }
            else if (yearly.classList.contains('active-color')===true
            && activeCard.style.transform=='translateX(20em)') {
                storage.pro()
            }
           else if (yearly.classList.contains('active-color')===true
            && activeCard.style.transform=='translateX(0px)') {
storage.arcade()
        }
        }
        )
     
})()