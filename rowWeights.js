function rowWeights(array){
  const team1 = array.filter((element, index) => index % 2 === 0);
  const team2 = array.filter((element, index) => index % 2 !== 0);

  return [team1.reduce((acc, curr) => acc+curr,0),team2.reduce((acc, curr) => acc+curr,0)];
}
rowWeights([100,50]);
