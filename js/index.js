let helloHead = document.getElementById('HelloWorldText');
let Iam = document.querySelector('.intro-headline')
let divyanshu = document.querySelectorAll('p.intro-headline')[1];

helloHead.addEventListener("mouseenter", e =>{
    helloHead.innerText= 'About';
});

helloHead.addEventListener('mouseleave',e=>{
    helloHead.innerText = 'Hello.';
    
}
)




Iam.addEventListener("mouseenter", e =>{
    Iam.innerText= 'Projects';
    helloHead.style.color = 'var(--primary-color-red)';
    Iam.style.color='var(--primary-color-white)';
});

Iam.addEventListener('mouseleave',e=>{
    Iam.innerText = 'I am';
    helloHead.style.color = 'var(--primary-color-white)';
    Iam.style.color = 'var(--primary-color-red)'
})




divyanshu.addEventListener("mouseenter", e =>{
    divyanshu.innerText= 'Contact';
    helloHead.style.color = 'var(--primary-color-red)';
    divyanshu.style.color='var(--primary-color-white)';
});


divyanshu.addEventListener('mouseleave',e=>{
    divyanshu.innerText = 'Divyanshu';
    helloHead.style.color = 'var(--primary-color-white)';
    divyanshu.style.color = 'var(--primary-color-red)'
})

// click events


helloHead.addEventListener('click',()=>{
    window.open('./about.html', '_blank');
})


Iam.addEventListener('click',()=>{
    window.open('https://github.com/divyanshuParihar265','_blank')
})



divyanshu.addEventListener('click',()=>{
    window.open('./contact.html','_blank')
})