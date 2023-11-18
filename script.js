const stars = document.querySelectorAll('.star-buttons');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');
const resultContainer = document.getElementById('container1');
const ratingContent = document.getElementById('container');
let userRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        userRating = parseInt(star.getAttribute('data-value'));
        updateStars(userRating);

        star.classList.add('clicked');
    });
});

submitBtn.addEventListener('click', () => {
    if (userRating === 0) {
        resultElement.textContent = "Please select rating.";
    } else {
        resultElement.textContent = `You selected ${userRating} out of 5`;
        // You can send this rating to your server for further processing
    }

    ratingContent.style.display = "none";
    resultContainer.style.display = 'block';

});


function updateStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('active', value <= rating);
    });
}