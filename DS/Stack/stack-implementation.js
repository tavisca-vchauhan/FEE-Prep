class Stack {
    constructor() {
        this.stack = {};
        this.size = 0;
    }

    push(value) {
        this.stack[this.size] = value;
        this.size++;
    }

    pop() {
        if (this.size == 0) {
            console.log('Underflow');
            return 'Underflow';
        } 
        this.size--;
        let value = this.stack[this.size];
        delete this.stack[this.size];
        return value;
    }

    peek() {
        console.log(this.stack[this.size - 1]);
        return this.stack[this.size - 1];
    }

    print() {
        
        let index = 0, stack = '[ ';
        while (index < this.size) {
            stack += this.stack[index] + " ";
            index++;
        }
        stack += "]";
        console.log(stack);
    }
}

var stack = new Stack();
stack.pop();
stack.push(4);
stack.push(6);
stack.push(7);
stack.push(9);
stack.print();
stack.pop();
stack.pop();
stack.pop();
stack.print();
stack.peek();
stack.push(10);
stack.peek();
