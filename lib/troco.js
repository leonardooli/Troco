const validNotes = [100,50,20,10,5,2];

module.exports = {
  getDifference: (Difference) => {
    const quantity = [];
    let index = 0;
    do {
      if (value >= validNotes[index]){
        quantity.push(validNotes[index]);
        value -= validNotes[index];
      } else index++;
    } while(value > 0);
    return quantity;
  }
