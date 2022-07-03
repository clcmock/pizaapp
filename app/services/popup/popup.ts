import duplex from "../duplex";

export default {
  duplex: duplex,

  setPassword(password) {
    return this.duplex.send('setPassword', password);
  },
}
