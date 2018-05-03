var slideNum = 1;
show(slideNum);
slideShowAnimation();

function add(number) {
    show(slideNum += number);
}

function show(number) {
    var i;
    var slideElement = document.getElementsByClassName("slide");
    // Resetting to the first slide once the slideshow is over
    if (number > slideElement.length) {
        slideNum = 1
    }
    // Setting maximum number of slides
    if (number < 1) {
        slideNum = slideElement.length
    };
    // Hiding all other slides except the one selected
    for (i = 0; i < slideElement.length; i++) {
        slideElement[i].style.display = "none";
    }
    // Shows the slide selected
    slideElement[slideNum - 1].style.display = "block";
}

function slideShowAnimation() {
    var i;
    var slideElement = document.getElementsByClassName("slide");
    // Hiding every picture besides the one currently selected in the array
    for (i = 0; i < slideElement.length; i++) {
        slideElement[i].style.display = "none";
    }
    // Returns to the first slide
    slideNum++;
    if (slideNum > slideElement.length) {
        slideNum = 1
    }
    // Shows slide
    slideElement[slideNum - 1].style.display = "block";
    // The next slide will display after 5 seconds
    setTimeout(slideShowAnimation, 5000);
}
