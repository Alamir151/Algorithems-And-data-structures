class Stack{
    constructor(){
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.items.length===0) return null;
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(this.items.length===0) return null;
        return this.items[this.items.length - 1];
    }
    length(){
        return this.items.length;
    }
    clear() {
        this.items = [];
      }
      toList(){
        return this;
      }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.toList()); // "10 20 30"
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.length()); 