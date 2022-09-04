let arrows = document.querySelectorAll('.questions-arrow');
let questionsItems = document.querySelectorAll('.questions-item');

arrows.forEach((arrow, arrowsIndex) => {
    arrow.addEventListener('click', () => {
        questionsItems.forEach((question, questionsIndex) => {
            if (arrowsIndex === questionsIndex) {
                if (question.className === 'questions-item') {
                    question.className = 'questions-item disabled';
                } else {
                    question.className = 'questions-item';
                }
            } else {
                question.className = 'questions-item disabled';
            }
        });
    });
});
