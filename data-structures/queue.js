/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  // implement me...
  this.capacity = capacity || Infinity;
  this.front = {};
  this.length = 0;
  this.Node = function(data) {
    this.data = data;
    this.next = null;
  };
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  let inLine = new this.Node(value);
  if (!this.front.data) {
    this.front = inLine;
    this.length++;
  } else {
    let end = this.front;
    this.length = 1;
    while (end.next) {
      end = end.next;
      this.length++;
    }
    end.next = inLine;
    this.length++;
  }
  return this.count;
};
// Time complexity: O(n)

Queue.prototype.dequeue = function() {
  // implement me...
  let data;
  if (!this.front.data) {
    console.log('The Queue is already empty');
    return null;
  } else if (!this.front.next) {
    data = this.front.data;
    this.front = {};
    this.count--;
  } else {
    data = this.front.data;
    this.front = this.front.next;
    this.count--;
  }
  return data;
};
// Time complexity: O(1)

Queue.prototype.peek = function() {
  // implement me...
  if (!this.front.data) {
    console.log('The Queue is empty');
    return null;
  } else {
    return this.front.data;
  }
};

Queue.prototype.count = function() {
  // implement me...
  return this.count;
};
// Time complexity: O(1)

let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(9);
myQueue.enqueue(8);
myQueue.enqueue(1);
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
