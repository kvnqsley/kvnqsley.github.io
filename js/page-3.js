(function () {
    const online = document.querySelector('#online');
    const storage = document.querySelector('#storage');
    const profile = document.querySelector('#profile');
    const nxtBtn=document.getElementById('nxt-btn');
    const errorBox=document.getElementById('error-box');
    const sub1=document.querySelector('.sub-1');
    const sub2=document.querySelector('.sub-2');
    const sub3=document.querySelector('.sub-3');
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

    //trigger the next button with  enter key
    window.addEventListener('keypress',(e)=>{
        if (e.key=='Enter') {
           nxtBtn.click()
        }
    })
    function isChecked() {
        if ((storage.checked||profile.checked||online.checked)==true) {
            errorBox.classList.add('inactive')
        }
    }
    sub1.textContent=localStorage.getItem('sub1');
    sub2.textContent=localStorage.getItem('sub2');
    sub3.textContent=localStorage.getItem('sub3');
       
})();
