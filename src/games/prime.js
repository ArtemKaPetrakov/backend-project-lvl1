import _ from 'lodash';

import gameStart from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndCorrectAnswer = () => {

  return [question, String(correctAnswer)];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
