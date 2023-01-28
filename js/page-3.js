const online = document.querySelector('#online');
const storage = document.querySelector('#storage');
const profile = document.querySelector('#profile');
const nxtBtn=document.getElementById('nxt-btn');
const errorBox=document.getElementById('error-box');
const backBtn=document.querySelector('.back-btn');
backBtn.addEventListener('click',()=>{
    history.back()
});
nxtBtn.addEventListener('click',(e)=>{
//  e.preventDefault()
        if ((storage.checked||profile.checked||online.checked)==false) {
            e.preventDefault();
            document.createElement('div');
            errorBox.textContent=`Please tick a box`

        }
        setInterval(isChecked,2000)
  
    
})
function isChecked() {
    if ((storage.checked||profile.checked||online.checked)==true) {
        errorBox.classList.add('inactive')
    }
}
