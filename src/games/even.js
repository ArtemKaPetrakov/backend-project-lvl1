import _ from 'lodash';

import gameStart from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndCorrectAnswer = () => {
  const question = _.random(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
