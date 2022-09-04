let arrows = document.querySelectorAll('.questions-arrow');
let questionsItems = document.querySelectorAll('.questions-item');

arrows.forEach((arrow, arrowsIndex) => {
    arrow.addEventListener('click', () => {
        questionsItems.forEach((question, questionsIndex) => {
            question.className = 'questions-item disabled';
            if (arrowsIndex === questionsIndex) {
                question.className = 'questions-item';
            }
        });
    });
});
