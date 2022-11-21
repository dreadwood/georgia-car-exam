const Selectors = {
  CARD: '.card',
  ANSWER: '.card__answer',
  RIGHT_ANSWER: 'button[data-correct-answer]',
};

const ClassNames = {
  ANSWER: 'card__answer',
  ANSWER_SELECT: 'card__answer--select',
  CARD_DISABLED: 'card--disabled',
};

const cards = document.querySelectorAll(Selectors.CARD);

function onCardClick(this: HTMLElement, evt: Event): void {
  if (this.classList.contains(ClassNames.CARD_DISABLED)) {
    return;
  }

  if (!(evt.target instanceof HTMLElement)) {
    return;
  }

  const answer = evt.target.closest(Selectors.ANSWER);

  if (!(answer instanceof HTMLElement)) {
    return;
  }

  if (answer.dataset.correctAnswer !== 'true') {
    const rightAnswer = this.querySelector(Selectors.RIGHT_ANSWER);

    rightAnswer?.classList.add(ClassNames.ANSWER_SELECT);
  }

  answer.classList.add(ClassNames.ANSWER_SELECT);
  this.classList.add(ClassNames.CARD_DISABLED);
}

cards.forEach(card => {
  card.addEventListener('click', onCardClick);
});
