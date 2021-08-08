/**
 * @description 实际上：通过顺序判断新鲜度即可,越靠后越新鲜
 * @param {number} capacity
 */

class LRUCache {
  capacity;
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    // 往最后插入
    this.cache.set(key, value);
    return value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size === this.capacity) {
        // 第一个，最不新鲜
        this.cache.delete(this.cache.keys().next().value);
      }
    }
    this.cache.set(key, value);
  }
}

const lRUCache = new LRUCache(2);

console.log(lRUCache);
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
