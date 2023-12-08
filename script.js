const imageFilenames = ["natali1.jpg", "natali2.jpg", "natali3.jpg", "natali4.jpg", "natali5.jpg", "natali6.jpg", "natali7.jpg", "natali8.jpg", "natali9.jpg"];

const correctAnswers = ["natali1.jpg", "natali2.jpg", "natali3.jpg", "natali4.jpg", "natali5.jpg", "natali6.jpg", "natali7.jpg", "natali8.jpg", "natali9.jpg"]; 

let selectedAnswers = [];

function checkAnswers() {
    const resultDiv = document.getElementById("result");

    const allAnswersCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.length === correctAnswers.length;

    if (allAnswersCorrect) {
        resultDiv.textContent = "Congratulations! You got it right!";
        
        setTimeout(function() {
            window.location.href = "page1.html";
        }, 2000);
    } else {
        resultDiv.textContent = "Try again. Select all correct images.";
    }
}

document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', function() {
        const imageName = this.src.substring(this.src.lastIndexOf("/") + 1); 

        if (selectedAnswers.includes(imageName)) {
            selectedAnswers = selectedAnswers.filter(answer => answer !== imageName);
            this.classList.remove('selected');
        } else {
            selectedAnswers.push(imageName);
            this.classList.add('selected');
        }
    });
});

document.getElementById('checkButton').addEventListener('click', function() {
    checkAnswers();
});
