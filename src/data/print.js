const { cards } = require('./data');

function printQuestions(questions, begin = 1, end = questions.lenght) {
  console.log(
    'Вопросы для копирования ниже:\n\n',
    questions
      .slice(begin - 1, end)
      .map((question, i) =>
        [
          `${i + 1} ${question.ru.question}`,
          ...question.ru.answers.map(answer => answer.text),
        ].join('\n'),
      )
      .join('\n\n'),
  );
}

printQuestions(cards, 1, 10);
