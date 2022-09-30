const answers = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
];

const questions = document.querySelectorAll('.accordion-question');

const showAnswer = (e) => {
    const answerContainers = document.querySelectorAll('.faqs-answerContainer');
    const template = document.getElementById('answerTemplate');
    const clone = template.content.firstElementChild.cloneNode(true);
    const index = e.target.parentNode.dataset.index; // parseInt() if necessary

    questions.forEach((item) => {
        item.style.color = 'hsl(238, 29%, 16%)';
        item.style.fontWeight = '400';
    });

    if (answerContainers[index].textContent.length > 0) {
        answerContainers[index].textContent = '';
        return;
    }
    answerContainers.forEach((item) => (item.textContent = ''));
    questions[index].style.color = 'hsl(238, 29%, 16%)';
    questions[index].style.fontWeight = '700';

    clone.textContent = answers[index];
    answerContainers[index].appendChild(clone);
};

const mouseOverQuestion = (e) => {
    const index = e.target.parentNode.dataset.index;
    questions[index].style.color = 'hsl(14, 88%, 65%)';
};

const mouseOutQuestion = (e) => {
    const index = e.target.parentNode.dataset.index;
    questions[index].style.color = 'hsl(237, 12%, 33%)';
};

document.addEventListener('mouseover', (e) => {
    if (e.target.matches('.accordion-question')) mouseOverQuestion(e);
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('.accordion-question')) mouseOutQuestion(e);
});

document.addEventListener('click', (e) => {
    if (e.target.matches('.accordion-question') | e.target.matches('.accordion-arrow'))
        showAnswer(e);
});
