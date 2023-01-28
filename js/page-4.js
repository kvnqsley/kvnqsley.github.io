
// // console.log(pack);
const pack =document.querySelector('.package');
pack.textContent=localStorage.getItem('package');


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

