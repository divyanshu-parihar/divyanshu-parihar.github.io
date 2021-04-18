let email = document.querySelector('#email');
let linkedIn = document.querySelector('#linkedIn');
let fiverr = document.querySelector('#fiverr');


email.addEventListener("click", e => {
    const el = document.createElement('textarea');
    el.value = 'divyanshu.code@gmail.com';
    el.select();
    document.execCommand('copy');
    alert('copied')
});

email.addEventListener('mouseenter',e =>{
    email.textContent = 'Click to Copy';

})
email.addEventListener('mouseleave', e => {
    email.textContent = 'divyanshu.code@gmail.com'
})


linkedIn.addEventListener("click",e=>{
    window.location.href = 'https://www.linkedin.com/in/divyanshu-parihar/';
})

fiverr.addEventListener('click',e=>{
    window.location.href = 'https://www.fiverr.com/creativemind111';
})