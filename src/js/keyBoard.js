/* eslint-disable import/extensions */
import Key from './key.js';
import KEYS_ARRAY from './keysPack.js';

export default class KeyBoard {
  constructor(lang, upperCase) {
    this.shift = true;
    const doc = document.createElement('div');
    doc.id = 'keyboard';
    KEYS_ARRAY.forEach((obj) => {
      const currentKey = new Key(obj);
      doc.append(currentKey.makeButton(lang, upperCase));
    });
    document.querySelector('body > div.wrapper').append(doc);
  }
}
