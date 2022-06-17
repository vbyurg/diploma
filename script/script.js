
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

if (document.querySelector('.basket_flex')) {

    document.querySelector(".phone").addEventListener("keyup", function(){
        this.value = this.value.replace(/[^\d]/g, "");
    });
    }

//card_basket buttons +/-


if (document.querySelector('.card_form')) {

function calculateValues(e) {
    
    let item = $('#Col');
    let itemCount = item.val();
    item.val(itemCount);
    let price = $("#primaryTotal .price");;
    let priceValue = price.data("price") * 1;
    let totalValue = priceValue * itemCount;
    price.text(totalValue.toFixed(2));

}
    $(function() {
    $("#primaryTotal .price").data("price");
    $("#btnMinus").add("#btnPlus").on('click', function(e) {

    let num = $('#Col');
    let numValue = num.val() * 1;

    if (this.id === "btnMinus") {
        numValue--;
    } else {
        numValue++;
    }
    
    if (numValue < num.attr("min")) {
        numValue = num.attr("min") * 1;
    }
    
    if (numValue > num.attr("max")) {
        numValue = num.attr("max") * 1;
    }

    num.val(numValue).trigger('change');
    });
    $("#Col").on('change', calculateValues);
    });

    calculateValues();
}


// basket

// +/-

if (document.querySelector('.order')) {


    function calculateValues(e) {
    
        let item = $('#Col');
        let itemCount = item.val();
        item.val(itemCount);
        let price = $("#primaryTotal .price");;
        let priceValue = price.data("price") * 1;
        let totalValue = priceValue * itemCount;
        price.text(totalValue.toFixed(2));
    
    }
        $(function() {
        $("#primaryTotal .price").data("price");
        $("#btnMinus").add("#btnPlus").on('click', function(e) {
    
        let num = $('#Col');
        let numValue = num.val() * 1;
    
        if (this.id === "btnMinus") {
            numValue--;
        } else {
            numValue++;
        }
        
        if (numValue < num.attr("min")) {
            numValue = num.attr("min") * 1;
        }
        
        if (numValue > num.attr("max")) {
            numValue = num.attr("max") * 1;
        }

        num.val(numValue).trigger('change');
        });
        $("#Col").on('change', calculateValues);
        });

        calculateValues();
    }

// clear price

        if ($('clearbtn')) {
        document.getElementById('clearbtn').onclick = function(e) {
        $("#primaryTotal .price").html('');
        $(".number").val(1);
        } 
    }
