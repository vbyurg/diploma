
// slider
let slideIndex = 1;

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


// input tel validation
document.querySelector(".phone").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});


// ===========================================================
// email validation
// document.querySelector(function() {
//     document.querySelector(".btn_submit").addEventListener("click", validate);
   
    // Validate email
    // function validateEmail(email) {
    //   let i = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //   return i.test(String(email).toLowerCase());
    // }
     
    // send form
    // function sendForm() {
    //   document.querySelector(".error").text("Form sending").fadeIn();
    // }
   
    // validate email and send form after success validation
//     function validate() {
//       let email = document.querySelector(".email").value;
//       let $error = document.querySelector(".error");
//       $error.text("");
   
//       if (validateEmail(email)) {
//         $error.fadeOut();
//         sendForm();
//       } else {
//         $error.fadeIn();
//         $error.text(email + " неверно введён email");
//       }
//       return false;
//     }
//   });




//   <form class="form" action="javascript:void(0)">
//   <div class="form-row">
//     <div class="form-col">
//       <input type="text" class="email" placeholder="E-mail">
//       <span class="error"></span>
//     </div>
//   </div>
//   <button type="submit" class="btn-submit">Get Discount</button>
// </form>

  // ===========================================================