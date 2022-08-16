import readlineSync from 'readline-sync';

export default (description, questionAndCorrectAnswer) => {
  
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(description); // Описание игры, само описание в игре

  let count = 0;

  do {
    const [question, correctAnswer] = questionAndCorrectAnswer();

    console.log(`Question: ${question}`); // задаем вопрос, вопрос в игре

    const userAnswer = readlineSync.question('');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } while (count < 3);
};