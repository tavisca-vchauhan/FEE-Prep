class Queue {
    constructor() {
        this.queue = {};
        this.length = 0;
        this.frontIndex = 0;
    }

    size() {
        console.log(this.length - this.frontIndex);
        return this.length - this.frontIndex;
    }

    isEmpty() {
        console.log((this.length - this.frontIndex) == 0);
        return this.length == 0;
    }

    front() {
        if ((this.length - this.frontIndex) == 0) {
            console.log("Queue is empty");
            return "Queue is empty";
        }
        console.log(this.queue[0]);
        return this.queue[this.frontIndex];
    }

    enqueue(value) {
        this.queue[this.length] = value;
        this.length++;
    }

    dequeue() {
        if ((this.length - this.frontIndex) == 0) {
            console.log("Underflow");
            return 'underflow';
        }
        delete this.queue[this.frontIndex];
        this.frontIndex++;
    }

    print() {
        console.log(this.queue);
    }
}

let queue = new Queue();

queue.isEmpty();
queue.front();
queue.enqueue(2);
queue.enqueue(8);
queue.enqueue(6);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.isEmpty();
