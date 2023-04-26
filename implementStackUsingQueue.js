class Queue_1 {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  enqueue(item) {
    this.items.push(item);
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return null;
    this.length--;
    return this.items.shift();
  }
  peek() {
    if (this.length === 0) return null;
    return this.items[0];
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  toList() {
    return this.items;
  }
}

class MyStack {
  constructor() {
    this.queue = new Queue_1();
  }
  push(item) {
    this.queue.enqueue(item);
    let size = this.queue.size();
    while (size > 1) {
      this.queue.enqueue(this.queue.dequeue());
      size--;
    }
  }
  pop() {
    return this.queue.dequeue();
  }
  top() {
    return this.queue.peek();
  }
  empty() {
    return this.queue.isEmpty();
  }
}
