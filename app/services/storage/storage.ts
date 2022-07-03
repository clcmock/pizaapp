import * as storage from '../../utils/storage'

const StorageService = {
  storageKeys: [
    'accounts',
    'nodes',
    'transactions',
    'selectedAccount',
    'prices',
    'pendingTransactions',
    'tokenCache',
    'setting',
    'language',
    'addressType',
    'dappList',
    'allDapps',
    'allTokens',
    'authorizeDapps',
    'vTokenList',
    'chains',
    'addressBook',
    'customTokens',
    
  ],
  storage,
  ready: false,
  password: false,
  authenticate(password) {
    this.password = password;
    this.ready = true;
  },
  save(...keys) {
    if (!this.ready)
      return console.error('Attempted to write storage when not ready');

    if (!keys.length)
      keys = this.storageKeys;

    console.info(`Writing storage for keys ${keys.join(', ')}`);

    keys.forEach(key => (
      this.storage.set({
        // [key]: Utils.encrypt(this[key], this.password)
      })
    ));

    console.info('Storage saved');
  },

}

export default StorageService