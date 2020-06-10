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
    
    //Animates the links doesn't work
    /*navLinks.forEach((link,index)=>{
        if (link.style.animation){
            link.getElementsByClassName.animation = '';
        }else{
            link.getElementsByClassName.animation = 'navLinkFade 0.5s ease-in forwards ${index/7 + 2}s';
        }
        console.log(index/7);
    });*/

    //Hamburger menu animation
    burger.classList.toggle('toggle');
    });
    
}


  
navSlide();

