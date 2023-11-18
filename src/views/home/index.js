/*
 * @Author: chenzechao
 * @Date: 2023-10-18 21:30:53
 * @LastEditTime: 2023-10-19 00:54:11
 * @LastEditors: chenzechao
 * @Description:
 * @FilePath: /tius-manager-system/src/views/home/index.js
 */
function render() {
  console.log("视图渲染");
}
let data = {
  name: "asd",
};

let methods = ["pop", "shift", "unshift", "sort", "reverse", "splice", "push"];
let arrayProto = Array.prototype;
let proto = Object.create(arrayProto);
methods.forEach((methods) => {
  proto[methods] = function () {
    arrayProto.call(this, ...arguments);
    render();
  };
});

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function observe(data) {
  if (Array.isArray(data)) {
    Object.setPrototypeOf(data, proto);
  }
  if (!isObject) {
    return;
  }
  let proxy = new Proxy(obj, {
    get(target, key, receiver) {
      return isObject(Reflect.get(key)) ? observe(target[key]) : target[key];
    },
    set(target, key, value, receiver) {
      render();
      return Reflect.set(target, key, value);
    },
  });
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
  function defineReactive(obj, key, value) {
    observe(value);
    let dp = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dp.addSub(Dep.target);
        }
        return value;
      },
      set(newV) {
        observe(newV);
        if (newV !== value) {
          render();
          value = newV;
          dp.notify();
        }
      },
    });
  }
}
function $set(obj, key, value) {
  defineReactive(obj, key, value);
}
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
class Watacher {
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    Dep.target = null;
  }
  update() {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}
