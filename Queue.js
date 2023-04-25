class Queue{
    constructor(){
        this.items=[];
      
       
        this.length=0;
    }
    enuque(item){
        this.items.push(item);
        this.length++;
        
    }
    dequeue(){
        if(this.length===0)return null;
        this.length--;
        
        return this.items.shift();
    }
    peek(){
        if(this.length===0) return null;
        return this.items[this.length-1];
    }
    isEmpty(){
        return this.length===0;
    }
    size(){
        return this.length;
    }
    toList(){
        return this.items;
    }
}
const qu=new Queue();
qu.enuque(1);
qu.enuque(2);
qu.enuque(3);
console.log(qu.toList());
console.log(qu.peek());
console.log(qu.size());
qu.dequeue()

console.log(qu.toList());
console.log(qu.size());