function Node(value) {
  this.value = value;
  this.next = null;
}

var MinStack = function () {
  this.head = null;
  this.min = null;
  return this;
};

MinStack.prototype.push = function (val) {
  if (val === null) return;
  if (val < this.min || !this.min) this.min = val;
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
};

MinStack.prototype.pop = function () {
  if (this.head.next && this.min == this.head.value) {
    let p = this.head.next;
    let tempMin = p.value;
    while (p) {
      if (p.value < tempMin) {
        tempMin = p.value;
      }
      p = p.next;
    }
    this.min = tempMin;
  }
  let pointer = this.head;
  this.head = pointer.next;
  pointer.next = null;
  if (!this.head) this.min = null;
  return pointer.value;
};

MinStack.prototype.top = function () {
  if (!this.head) return;
  return this.head.value;
};

MinStack.prototype.getMin = function () {
  if (!this.min) return null;
  return this.min;
};

let a = new MinStack();
a.push(-2);
a.push(0);
a.push(-3);
console.log(a.getMin());
a.pop();
console.log(a.top());
console.log(a.getMin());
