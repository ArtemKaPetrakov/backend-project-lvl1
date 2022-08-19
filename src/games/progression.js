import _ from 'lodash';

import gameStart from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = _.random(5, 10); // длинна прогрессии от 5 до 10
const getProgression = () => { // формируем прогрессию
  let firstNumber = _.random(0, 15); // первый элемент
  const step = _.random(2, 5); // шаг прогрессии
  const progression = []; // массив значений прогрессии

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber); // пушаем первый элеменет
    firstNumber += step; // меняем на шаг прогрессии
  }
  return progression;
};

const questionAndCorrectAnswer = () => {
  const progression = getProgression(); // прогрессия
  const indexOfHiddenElement = _.random(0, progressionLength);
  // получаем индекс спрятанного элемента от 0 до длинны прогрессии
  const correctAnswer = String(progression[indexOfHiddenElement]); // правильный ответ
  progression[indexOfHiddenElement] = '..'; // менянем на '..'
  const question = progression.join(' '); // выводим вопрос (прогрессию с спрятанным элементом)

  return [question, correctAnswer];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
