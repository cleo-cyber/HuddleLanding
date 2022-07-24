const input=document.querySelector('.input');
const submitBtn= document.querySelector('.submitBtn');

submitBtn.addEventListener('click',validateForm);

function validateForm(e){
   if(input.value.length===0){
    e.preventDefault()
    input.classList.add('invalid_input');
    input.style.border='1px solid red'
    alert('check your email please');
   }
   
}
setTimeout(function(){
    input.classList.remove('invalid-input');
    input.style.border=''
},3000);