const annoyer = {
  phrases: ['Hi', 'Yo', 'Whats up', 'Shoo', 'Kiff'],
  intervalId: 0,
  pickPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  },
  start() {
    // an Arrow function will get its outside `this`
    // meaning, the `annoyer` object
   this.intervalId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
// a regular function inside setInterval()
// will have its own `this`
// so we need to capture `this` into `that`
// and pass it to the callback function    
//     let that = this; 
//     that.intervalId = setInterval(function () {
//       console.log(that.pickPhrase());
//     }, 3000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};
// annoyer.start();
// annoyer.stop();
