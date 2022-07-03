import EventEmitter from 'eventemitter3';
import StorageService from '../storage';
import { APP_STATE } from '../../config/constants'


class Wallet extends EventEmitter {
  constructor() {
    super();
    this.state = APP_STATE.UNINITIALISED;
  }
  state: number
  private _setState(appState) {
    if (this.state === appState)
      return;

    console.info(`Setting app state to ${appState}`);

    this.state = appState;
    this.emit('newState', appState);
    // if(appState === APP_STATE.DAPP_LIST) {
    //     ga('send', 'event', {
    //         eventCategory: 'Dapp List',
    //         eventAction: 'Recommend',
    //         eventLabel: 'Recommend',
    //         eventValue: VisionWeb.address.fromHex(this.selectedAccount),
    //         userId: Utils.hash(VisionWeb.address.toHex(this.selectedAccount))
    //     });
    // }

    return appState;
  }
  setPassword(password) {
    if (this.state !== APP_STATE.UNINITIALISED)
      return Promise.reject('ERRORS.ALREADY_INITIALISED');
      StorageService.authenticate(password);
      StorageService.save();
      // NodeService.save();
  
      // this._updatePrice();
  
      // logger.info('User has set a password');
      this._setState(APP_STATE.UNLOCKED);
  
      // const node = NodeService.getCurrentNode();
      // // 更新pageHook里的node信息，即是注入到页面中的tronWeb信息
      // this.emit('setNode', {
      //   fullNode: node.fullNode,
      //   solidityNode: node.solidityNode,
      //   eventServer: node.eventServer
      // });

    return true
  }
}
export default Wallet