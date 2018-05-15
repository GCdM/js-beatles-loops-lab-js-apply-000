function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}
function johnLennonFacts(facts) {
  var counter = 0;
  var exclaim = [];
  while (counter < facts.length) {
    exclaim.push(`${facts[counter]}!!!`);
    counter++;
  }
  return exclaim;
}
function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return love;
}