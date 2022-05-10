export default class Key {
  constructor(key) {
    this.value = key.key;
    this.code = key.code;
    this.class = key.class;
    this.id = key.id;
  }

  makeButton(lang, shift) {
    const el = document.createElement('div');
    const value = this.class === 'optional' ? this.value : this.value[lang][shift];
    el.innerText = value;
    el.classList.add(this.class);
    if (this.id) {
      el.id = this.id;
    }
    el.setAttribute('code', this.code);
    el.setAttribute('buttonValue', value);
    return el;
  }
}
