function isValidPassword(password, username){
    if(password.length < 8) return false;
    if(password.includes(' ')) return false;
    if(password.indexOf(username) > -1) return false;

    return true;
}

// isValidPassword('fdg', 'shlomir'); //false
//isValidPassword('aaashlomirbbb', 'shlomir'); //false
//isValidPassword('fdg f', 'shlomir'); //false
// isValidPassword('12345678', 'shlomir'); //true
