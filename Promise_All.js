function all(promises){
    return new Promise((resolve,reject) => {
        const successArr = new Array(promises.length)
        if(promises.length === 0) resolve(successArr);
        let pending = promises.length;
        promises.forEach((promise, index) => {
            promise
            .then((result) => {
                successArr[index] = result;
                pending -= 1;
                if (pending == 0) resolve(successArr);
            })
            .catch(error => console.log(error))
        });
    });
}
