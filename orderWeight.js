/**
sort array of objects by multiple keys
for each number give a weight = sum of its digits
normally, sort by weight descending
if 2 weights are equal, sort the numbers alphabetically 
*/

function orderWeight(strng) {
    const arr = strng.trim().split(' ');
    let weights = arr.reduce((obj, key) => {
        obj.push(
        {
            number: key,
            value:  key.split('')
                        .map(x => Number(x))
                        .reduce((a,c) => a+c, 0) 
        });
        return obj;
    }, []);

    weights.sort((a,b) => {
        if(a.value === b.value){
            return a.number - b.number;
        }
        return b.value - a.value;
    });


    let results = [];
    weights.forEach(o => {
        results.push(o.number);
    })
    return results.join(' ');
}
// orderWeight("103 123 4444 99 2000");
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
