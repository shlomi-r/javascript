function high(x){
  //           00000000011111111112222222222
  //           12345678901234567890123456789
  const map = 'abcdefghijklmnopqrstuvwxyz';
  const wordWeights = x.split(' ').reduce((obj, key) => {  
      obj.push(
      { 
        word: key, 
        value: key.split('').map(x => map.indexOf(x)+1).reduce((a,c) => a+c, 0 ) 
      }
      ) ;
      return obj;
  }, []);
  
  wordWeights.sort((a,b) => b.value - a.value); //highest weight word goes first (DESC)
  return wordWeights[0].word;
}

high('man i need a taxi up to ubud');
