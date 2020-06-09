const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_burger'); 
    console.log(burger);
    console.log(nav);
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        console.log('burger clicked');
    });
}


  
navSlide();

