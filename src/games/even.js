import gameStart from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndCorrectAnswer = () => {
  const question = Math.ceil((Math.random()) * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
}