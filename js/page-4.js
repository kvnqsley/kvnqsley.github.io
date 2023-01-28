const pack =document.querySelector('.package');
pack.textContent=localStorage.getItem('package');
const span1=document.getElementById('sp1');
const span2=document.getElementById('sp2');
const span3=document.getElementById('sp3');
const span4=document.getElementById('sp4');
span1.textContent=localStorage.getItem('pc');
span2.textContent=localStorage.getItem('os');
span3.textContent=localStorage.getItem('ls');
span4.textContent=localStorage.getItem('total');
console.log(localStorage);
// setTimeout(()=>{
//     localStorage.clear()
// },2000);
//trigger the next button with  enter key
window.addEventListener('keypress',(e)=>{
    if (e.key=='Enter') {
        document.querySelector('.btn-link').click()
    }
})
const backBtn=document.querySelector('.back-btn');
backBtn.addEventListener('click',()=>{
    history.back()
});

