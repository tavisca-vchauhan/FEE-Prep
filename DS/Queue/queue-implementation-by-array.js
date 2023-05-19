class Queue {
    constructor() {
        this.queue = [];
    }

    size() {
        console.log(this.queue.length);
        return this.queue.length;
    }

    front() {
        console.log(this.queue[0]);
        return this.queue[0];
    }

    isEmpty() {
        console.log(this.queue.length == 0);
        return this.queue.length == 0
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        this.queue.shift();
    }

    print() {
        console.log(this.queue);
    }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(1);
queue.print();
queue.dequeue();
queue.dequeue();
queue.front();
queue.isEmpty();
queue.size();
queue.enqueue(18);
queue.size();
queue.dequeue();
queue.dequeue();
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();

