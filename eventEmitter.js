;(function (name, definition) {
  // 检测是否为AMD或CMD
  var hasDefine = typeof define === 'function',
  // 检查是否为node环境
  hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {  // AMD或CMD环境
    define(definition);
  } else if (hasExports) {  // node环境
    module.exports = definition();  // 定义为Node模块
  } else {  // 浏览器环境
    this[name] = definition();  // 将模块的执行结果挂载到全局window变量中，在浏览器中this指向window对象
  }
})('EventEmitter', function () {
  function EventEmitter() {
    this.__events = {}  // 存储事件对象
  }

  EventEmitter.prototype.addListener = function(name, listener) { //订阅消息
    if(!this.__events[name]){
      this.__events[name]=[listener];
    }else {
      this.__events[name].push(listener);
    }
  }

  EventEmitter.prototype.removeListener = function(name, listener) {  //取消订阅
    if(!this.__events[name]){
      return;
    }else{
      let index=this.__events[name].indexOf(listener)
      if(index>-1){
        this.__events[name].splice(index,1);
      }
    }
  }

  EventEmitter.prototype.emit = function(name, ...data) {  //派发消息
    if(!this.__events[name]){
      return;
    }else {
      this.__events[name].forEach(function(fn){
        fn.call(null, data);
      })
    }
  }
  return EventEmitter;
});
