# eventEmitter
A small wheel that publishes a subscription

## summary
An implementation of a publish subscription model. 

## Instructions
### 1.Import
Browser

```
<script type="text/javascript" src="./eventEmitter.js">
</script>
```
node

var eventEmitter = require("./eventEmitter.js");

### 2.API
#### Subscribe event
eventEmitter.addListener(name, listener)
* name  event name
* listener  listener function

#### unsubscribe
eventEmitter.removeListener(name, listener)
* name  event name
* listener  listener function

#### make an announcement
eventEmitter.emit(name, data)
* name  event name
* data  data

## Example
See [event.html](https://github.com/wangzianan/EventEmitter/blob/master/event.html) in this folder
