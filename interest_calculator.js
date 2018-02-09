function burndownWithInterestRate(payoff, fullAmount, interest, interestInterval) {
  let index = 0;
  let debt = fullAmount;
  let interestPayed = 0;
  let totalInterestPayed = 0;

  while (debt > 0) {
    if (index % interestInterval === 0 && index !== 0) {
      interestPayed = debt / 100 * interest / 12 * interestInterval;
      totalInterestPayed = totalInterestPayed + interestPayed;
      debt = debt + interestPayed;
      console.log('total payed interest: ', totalInterestPayed);
    }

    console.log(`payment nr. ${index}, debt is ${debt}`);
    debt = debt - payoff;
    console.log(`you have ${fullAmount - debt}`);
    index++;
  }
}

burndownWithInterestRate(2000, 22104.68, 10.25, 3);
// also calculate total interest payed

/*
params: {
  payoff: fee that is payed to debt on a monthly basis
  fullAmount: full amount of debt
  interest: the interest calculated on debt
  interestInterval: how often will the interest be added to debt (unit in months)
}
*/
