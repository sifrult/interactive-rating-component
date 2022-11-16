var starEl = $('#star');

var questionEl = $('#feedback-question');

var rateEl = $('#rating-numbers');

var submitBtn = $('#submit-button');

var imageEl = $('#image');

var ratingEl = $('#rating-selection');

var thankYouEl = $('#feedback-thankyou');

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
