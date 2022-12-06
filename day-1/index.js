import { run, ask, answer } from '../lib/utils.js';
import { sum } from '../lib/array.js';


run((input) => {
  const calories = input.split('\n\n').map(calories => sum(calories.split('\n').map(parseFloat)))

  ask('Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?');
  answer(Math.max(...calories));


  ask('Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?');
  answer(sum(calories.sort().slice(-3)));
});