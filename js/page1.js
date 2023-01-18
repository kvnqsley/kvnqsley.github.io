const btn1=document.querySelector('#btn-1')
const page1=document.querySelector('#page-1');
const page2=document.querySelector('#page-2');
const name=document.querySelector('#name')
const form=document.querySelector('form');
const email=document.querySelector('#email');
const inputs =document.querySelectorAll('input')
const phone=document.querySelector('#phone')
const label = document.querySelectorAll('label')

inputs.forEach(element => {
    element.addEventListener('focus',()=>{
        element.style.borderColor=`greenyellow`
    })
});
form.addEventListener('submit',(e)=>{

        if (name.value==='') {
            e.preventDefault()
            name.classList.add('set-error');
            name.classList.remove('set-success');
const errorBox =name.parentElement.children[1];
errorBox.textContent= 'This field is required'
     
        }
        if (phone.value==='') {
            e.preventDefault()
            phone.classList.add('set-error');
            phone.classList.remove('set-success');
const errorBox =phone.parentElement.children[13];
errorBox.textContent= 'This field is required'
     
        }    
    //     if (!phone.value.match(/^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$/)) {
    //    e.preventDefault()
    //    const errorBox =phone.parentElement.children[11];
    //    errorBox.textContent= 'Enter in the right format'
    //     }


        if (email.value==='') {
            e.preventDefault()
            email.classList.add('set-error');
            email.classList.remove('set-success');
const errorBox =email.parentElement.children[7];
errorBox.textContent= 'This field is required'
     
        }   

});


name.addEventListener('input',()=>{
    if (name.value.match(/\w/)) {
        name.classList.add('set-success');
        name.classList.remove('set-error');
        const errorBox =phone.parentElement.children[1];
         errorBox.textContent='';
         const chck =email.parentElement.children[4];
         chck.classList.remove('inactive')
         
    }
});console.log(form.children);
email.addEventListener('input',()=>{
    if (email.value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) {
        email.classList.add('set-success');
        email.classList.remove('set-error');
        const errorBox =phone.parentElement.children[7];
      errorBox.textContent='';
         const chck =email.parentElement.children[10];
         chck.classList.remove('inactive')
        
    }
})
phone.addEventListener('input',(e)=>{
    if (!phone.value.match(/^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$/)) {
        // e.preventDefault()
        phone.classList.add('set-success');
        phone.classList.remove('set-error');
        const errorBox =phone.parentElement.children[13];
        errorBox.textContent='';
        const chck =phone.parentElement.children[16];
        chck.classList.remove('inactive')
    }
})


function setError() {
  
    // errorBox.forEach(element => {
       
    // // });
    // // if (name.value=='') {
    // //     name.classList.add('set-error');

    // // }
    // // if (email.value=='') {
 
    // // }
    // // if (phone.value=='') {
    // //     phone.classList.add('set-error');

    // // }
}

