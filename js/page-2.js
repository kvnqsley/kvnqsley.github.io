const back=document.querySelector('.back-btn')
back.addEventListener('click',()=>{
    history.back()
    

})
console.log(history.length);
const toggle =document.querySelector('.toggle span')
toggle.addEventListener('click',(e)=>{
e.currentTarget.classList.toggle('active-toggle')
})