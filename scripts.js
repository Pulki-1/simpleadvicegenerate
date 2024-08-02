
document.getElementById('adviceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById('adviceText').textContent = advice;
        })
        .catch(error => {
            document.getElementById('adviceText').textContent = 'Sorry, something went wrong. Please try again later.';
        });
});
