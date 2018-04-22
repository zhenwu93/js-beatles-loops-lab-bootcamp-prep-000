function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < musicians.length; i++ ) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var exclamation = "!!!"
  let countdown = facts.length
  while (facts < countdown) {
    console.log(facts[--countdown] + exclamation);
    return facts;
  }
}
