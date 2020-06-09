const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_burger');
    const navLinks = document.querySelectorAll('.nav_burger li');
    console.log(burger);
    console.log(nav);
    console.log(navLinks);
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        console.log('burger clicked');
    });
}


  
navSlide();

