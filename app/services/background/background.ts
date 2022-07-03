
import duplex from "../duplex";
import Wallet from "../wallet";

export default {
  duplex: duplex,
  walletService: new Wallet(),
  run() {
    this.bindPopupDuplex();
    // this.bindTabDuplex();
    // this.bindWalletEvents();
  },

  bindPopupDuplex() {
    duplex.on('setPassword', this.walletService.setPassword);
  }
}