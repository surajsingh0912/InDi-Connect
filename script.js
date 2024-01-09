var tl = gsap.timeline();

tl
.from("#lowest", {
    onStart: function() {
        $('#lowest').textillate({
            in: {
                effect: 'fadeInUp',}
              
        });
    }
})
.from("#second-lowest", {
   opacity:0,
    delay:0.3,
    onStart: function() {
        $('#second-lowest').textillate({
            in: {
                effect: 'fadeInUp',}
                
        });
    }
})
.from("#second-top", {
    opacity:0,
   delay:0.5,
    onStart: function() {
        $('#second-top').textillate({
            in: {
                effect: 'fadeInUp',}
               
        },
    )}
})
.from("#top", {
   opacity:0,
    delay:0.01,
    onStart: function() {
        $('#top').textillate({
            in: {
                effect: 'fadeInUp'
            },
              
        });
    }
})
.to(".main",{
    duration:2.5,
ease: "power4.out",
top:"-100%",
    delay:1

}) 
.from("#home #pic1",{
    duration:0.5,
    opacity:0,

})
.from("#home #pic2",{
    duration:0.8,
    opacity:0,
    
});


var typed = new Typed("#elements",{
    strings : ["Heights","Experience","Growth", "and","Connections."]
,typeSpeed :320,
});



function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-100px',
    markers:true
})

scrollTrigger('.loader', {
    rootMargin: '-10px',
    cb: function(el){
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = 'Task Complete!'
        }, 1000)
    }
})

























;
searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
}
let loginForm =document.querySelector('.login-container');
document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=() =>{
    loginForm.classList.remove('active');
}
window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector(".header .header-2").classList.add('active');
        }else{
            document.querySelector(".header .header-2").classList.remove('active');
        }
    }
    window.onload = () =>{
        if(window.scrollY>80){
            document.querySelector(".header .header-2").classList.add('active');
            }else{
                document.querySelector(".header .header-2").classList.remove('active');
            }
        }
