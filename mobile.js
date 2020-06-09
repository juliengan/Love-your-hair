const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_burger');
    const navLinks = document.querySelectorAll('.nav_burger li');
    console.log(burger);
    console.log(nav);
    console.log(navLinks);

    //Toggle the burger_nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        console.log('burger clicked');
    });
    //Animates the links
    navLinks.forEach((link,index)=>{
        console.log(index);
    })
}


  
navSlide();

