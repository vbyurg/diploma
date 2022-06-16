
// slider
let slideIndex = 1;

if (document.querySelector('.advertisement')) {

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
}

// input tel validation
if (document.querySelector('.question')) {

document.querySelector(".phone").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});
}

//card_baskey buttons

if (document.querySelector('.card_form')) {


function calculateValues(e) {

    let item = $('#Col');
    let itemCount = Math.round(item.val());
    item.val(itemCount);
    let total = $("#primaryTotal");
    let price = total.find(".price");
    let priceValue = price.data("price") * 1;
    let totalValue = priceValue * itemCount;
    price.text(totalValue.toFixed(2));


}
    $(function() {
    $("#primaryTotal").find(".price").data("price", 332);
    $("#btnMinus").add("#btnPlus").on('click', function(e) {

    let num = $('#Col');
    let numValue = Math.round(num.val()) * 1;

    if (numValue < num.attr("min")) {
        numValue = num.attr("min") * 1;
        num.val(Math.round(numValue));
    }
    
    if (numValue > num.attr("max")) {
        numValue = num.attr("max") * 1;
        num.val(Math.round(numValue));
    }

    if (this.id === "btnMinus") {
        numValue--;
    } else {
        numValue++;
    }
    
    num.val(numValue).trigger('change');
    });
    $("#Col").on('change', calculateValues);
    });
}