const validNotes = [100,50,10,5,1];
const validCoins = [0.5,0.1,0.05,0.01];
module.exports = {
  getResult: (pay,value) => {
    let difference = Math.trunc(pay - value);
    let rest = ((pay - value) % 1).toFixed(2);
    const object1 = {
      difference,
      rest
    }
  },
  getNotes: (difference) => {
    const quantityNotes = [];
    let index = 0;
    do {
      if (difference >= validNotes[index]){
        quantityNotes.push(validNotes[index]);
        difference -= validNotes[index];
      } else index++;
    } while(difference > 0);
    return quantityNotes;
  },
  getCoins: (rest) => {
    const quantityCoins = [];
    let index = 0;
    do {
      if (rest >= validCoins[index]){
        quantityCoins.push(validCoins[index]);
        rest -= validCoins[index];
      } else index++;
    } while(rest > 0);
    return quantityCoins;
  }
}
