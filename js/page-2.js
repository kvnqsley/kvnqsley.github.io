const back=document.querySelector('.back-btn')
const monthly=document.querySelector('.monthly');
const yearly=document.querySelector('.yearly');

back.addEventListener('click',()=>{
    history.back()
    

})
console.log(history.length);
const toggle =document.querySelector('.toggle span')
toggle.addEventListener('click',(e)=>{
e.currentTarget.classList.toggle('active-toggle')
monthly.classList.toggle('active-color');
yearly.classList.toggle('active-color')
})