class StackUsingQueue {
  constructor() {
    this.queue = [];
  }

  push(element) {
    const length = this.queue.length;
    this.queue.push(element);
    for (let i = 0; i < length; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }
}

let stack = new StackUsingQueue();
stack.push(1); 
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 1
