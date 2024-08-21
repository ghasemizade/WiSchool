
document.querySelector("#right-scroll-btn").onclick = function() {

    var divContent = document.querySelector(".reviews-right-sec");
    divContent.scrollLeft += 380;
};

document.querySelector("#left-scroll-btn").onclick = function() {

    var divContent = document.querySelector(".reviews-right-sec");
    divContent.scrollLeft -= 380;
};