var slideNum = 1;
show(slideNum);
slideShowAnimation();

function add(number) {
    show(slideNum += number);
}

function show(number) {
    var i;
    var slideElement = document.getElementsByClassName("slide");
    if (number > slideElement.length) {
        slideNum = 1
    }
    if (number < 1) {
        slideNum = slideElement.length
    };
    for (i = 0; i < slideElement.length; i++) {
        slideElement[i].style.display = "none";
    }
    slideElement[slideNum - 1].style.display = "block";
}

function slideShowAnimation() {
    var i;
    var slideElement = document.getElementsByClassName("slide");
    for (i = 0; i < slideElement.length; i++) {
        slideElement[i].style.display = "none";
    }
    slideNum++;
    if (slideNum > slideElement.length) {
        slideNum = 1
    }
    slideElement[slideNum - 1].style.display = "block";
    setTimeout(slideShowAnimation, 5000);
}
