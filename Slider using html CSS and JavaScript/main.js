var slideIndex = 0;

showSlides()

function minusSlide(n) {
     showSlides(slideIndex -n)
}
function plusSlide(n) {
    showSlides(slideIndex +n)
}

function  showSlides() {
    var i;
    var slides = document.getElementsByClassName('mySlider')

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
   if(slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display="block"
   
   setTimeout(showSlides,5000)
    
}