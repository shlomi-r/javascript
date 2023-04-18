function incrementString (strng) {
  if(strng === "") return "1";
  const letters = strng.match(/[a-z]*/gi);
  const numbers = strng.match(/\d*/g);
  const mix = [...letters, ...numbers].filter(x => x !== ''); // ['letters', 'numbers']

//   console.log('L:',letters, 'N:', numbers,'M:', mix);

  let result = "";

  if(mix.length === 1){
    if(isNaN(mix[0])) return mix[0] + "1";
    else return (Number(mix[0]) + 1).toString().padStart(mix[0].length,"0")
  }
  mix.forEach((segment, i) => {
//     console.log(i,segment);
    segment = (i === 1 && Number.isInteger(Number(segment))) 
      ? (Number(segment) + 1).toString().padStart(segment.length,"0") 
      : segment;

    result += segment;
  })
  
//   console.log(result);
  return result;
}

incrementString(""); //1
incrementString("foo"); //foo1
incrementString("foo1"); //foo2
incrementString("foo99"); //foo100
incrementString("foo001"); //foo002
incrementString("11"); //12

