class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
queue.enqueue(4);
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
