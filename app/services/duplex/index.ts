import EventEmitter from 'eventemitter3';

class Duplex extends EventEmitter {
  constructor() {
    super()
  }
  send(method, params) {
    this.emit(method, params);
  }

}

const duplex = new Duplex();

export default duplex