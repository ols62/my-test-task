let question = document.getElementsByClassName('question__text');
console.log(question);
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    let active = false;
    for (let i = 0; i < question.length; i++) {
      if (
        this.className.includes('question_active') &&
        question[i].className.includes('question_active')
      ) {
        active = true;
        this.classList.toggle('question_active');
        if (this.nextElementSibling.style.display === 'block') {
          this.nextElementSibling.style.display = 'none';
        } else {
          this.nextElementSibling.style.display = 'block';
        }
      } else {
        question[i].className = 'question__text';
        question[i].nextElementSibling.style.display = 'none';
      }
    }
    if (!active) {
      this.className = 'question__text question_active';
      this.nextElementSibling.style.display = 'block';
    }
  });
}