var starEl = $('#star');

var questionEl = $('#feedback-question');

var rateEl = $('#rating-numbers');

var submitBtn = $('#submit-button');

var imageEl = $('#image');

var ratingEl = $('#rating-selection');

var selectedRatingEl = $('#selected-number')

var thankYouEl = $('#feedback-thankyou');

var btn1 = $('.btn1')
var btn2 = $('.btn2')
var btn3 = $('.btn3')
var btn4 = $('.btn4')
var btn5 = $('.btn5')

imageEl.hide();
ratingEl.hide();
thankYouEl.hide();

// What happens when you press submit
function formSubmit(event) {
    event.preventDefault();
    starEl.hide();
    questionEl.hide();
    rateEl.hide();
    submitBtn.hide();
    imageEl.show();
    ratingEl.show();
    thankYouEl.show();
}

// Submit rating
submitBtn.on("click", formSubmit);

btn1.on("click", function() {
    selectedRatingEl.text("1 ");
});


btn2.on("click", function() {
    selectedRatingEl.text("2 ");
});


btn3.on("click", function() {
    selectedRatingEl.text("3 ");
});


btn4.on("click", function() {
    selectedRatingEl.text("4 ");
});


btn5.on("click", function() {
    selectedRatingEl.text("5 ");
});
