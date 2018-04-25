var slideNum = 1;
show(slideNum);
slideShowAnimation();

function add(n) {
    show(slideNum += n);
}

function show(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideNum = 1}
    if (n < 1) {slideNum = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideNum-1].style.display = "block";
}

function slideShowAnimation() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideNum++;
    if (slideNum > x.length) {slideNum = 1}
    x[slideNum-1].style.display = "block";
    setTimeout(slideShowAnimation, 5000); 
}