const { cards } = require('./data');

// type Answers = {
//   text: string,
//   correct?: boolean,
// };

// type Question = {
//   ru: {
//     number: string | number,
//     question: string,
//     answers: Answers[],
//   },
// };

function testing(questions) {
  console.log('Колличество вопросов: ', questions.length);

  console.log(
    'У каждого вопроса есть правильный ответ:',
    questions.every(question =>
      question.ru.answers.some(answer => answer.correct),
    ),
  );

  console.log(
    'У каждого вопроса только один правильный ответ:',
    questions.every(question => {
      const countRightAnswer = question.ru.answers.reduce(
        (acc, it) => (acc = it.correct ? acc + 1 : acc),
        0,
      );

      return countRightAnswer === 1;
    }),
  );
}

try {
  testing(cards);
} catch (err) {
  console.error('Произошла какая-то ошибка', err);
  process.exit(1);
}
