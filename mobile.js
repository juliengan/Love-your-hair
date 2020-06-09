const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_burger'); 
    console.log(burger);
    console.log(nav);
    burger.addEventListener('click',()=>{
        nav.classList.toggle('.burger:active');
    });
}


navSlide();

