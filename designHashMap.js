var MyHashMap = function () {
  this.map = new Map();
};

MyHashMap.prototype.put = function (key, value) {
  this.map.set(key, value);
};

MyHashMap.prototype.get = function (key) {
  const val = this.map.get(key);
  return val !== undefined ? val : -1;
};

MyHashMap.prototype.remove = function (key) {
  this.map.delete(key);
};

module.exports = hashMap;
