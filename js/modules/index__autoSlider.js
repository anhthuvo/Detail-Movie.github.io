export const autoSlideShow = function() {
    const slides = document.getElementById("phoneAppSlider");
    const phoneframe = document.getElementById("phoneframe");
    
    let stopSlideShow = false;
    
    const autoSlideShow = function() {
        if (stopSlideShow) return;
        slides.style.transition = "all .5s";
        slides.style.left = 'calc(15px - 230px)';
        setTimeout(autoSlideShow, 2000);
    }
    
    autoSlideShow();
    slides.addEventListener("transitionend", () => {
        slides.style.transition = 'none';
        slides.appendChild(slides.firstElementChild);
        slides.style.left = '15px';
    });
    
    phoneframe.addEventListener("mouseover", function(){
        stopSlideShow = true;
        console.log(stopSlideShow);
    });
    
    phoneframe.addEventListener("mouseout", function(){
        stopSlideShow = false;
        console.log(stopSlideShow);
        autoSlideShow();
    });
}
