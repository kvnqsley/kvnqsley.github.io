const online = document.querySelector('#online');
const storage = document.querySelecto('#storage');
const profile = document.querySelector('#profile');
const nxtBtn=document.getElementById('nxt-btn')
const backBtn=document.querySelector('.back-btn');
backBtn.addEventListener('click',()=>{
    history.back()
});
nxtBtn.addEventListener('click',(e)=>{
 
        if ((storage.checked||profile.checked||online.checked)==false) {
            e.preventDefault();
            console.log('not checked');
        }
  
    
})