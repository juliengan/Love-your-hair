var slideIndex, slides, dots;

function initGallery(){
	 slideIndex=0;
	 slides=document.getElementsByClassName("imageHolder");
	 slides[slideIndex].style.opacity=1;

	 //add dots
    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

