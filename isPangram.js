//check if s has all alphabetic letters
function isPangram(s){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => s.toLowerCase().includes(c));

//     for(const l of 'abcdefghijklmnopqrstuvwxyz'){
//         if(s.toLowerCase().indexOf(l) === -1) return false;
//     }
//     return true;
}
//isPangram("Waltz, bad nymph, for quick jigs vex."); // true
isPangram("Waltz, bad nymph, for quick jigs ve."); // false
