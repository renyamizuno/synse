const KEY_ARRAY = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

const keyPushed = keyMap => {
  let f = false;

  keyMap.forEach(k => (f = f || k));
  return f;
};

export default class Keyboard {
  constructor(targetVCO, targetVCA, targetDOM = window.document) {
    this.baseFrequency = 261.63;
    this.targetDOMNode = targetDOM;
    this.targetVCA = targetVCA;
    this.targetVCO = targetVCO;
    this.targetDOMNode.addEventListener('keypress', this.keypress.bind(this));
    this.targetDOMNode.addEventListener('keyup', this.keyup.bind(this));
    this.keyMap = new Map(KEY_ARRAY.map(k => ([k, false])));
    this.watch();
  }

  watch() {
    let flag = false;
    const watch = () => {
      setTimeout(() => {
        if (keyPushed(this.keyMap) && !flag) {
          this.targetVCA.triggerOn();
          flag = true;
        } else if (!keyPushed(this.keyMap) && flag) {
          this.targetVCA.triggerOff();
          flag = false;
        }
        watch();
      }, 1);
    };

    watch();
  }

  keypress(e) {
    const key = e.key.toLowerCase();
    const keyPosition = KEY_ARRAY.indexOf(key);

    if (keyPosition >= 0) {
      this.targetVCO.frequency = this.baseFrequency * Math.pow(2, keyPosition / 12);
      this.keyMap.set(key, true);
    }
  }

  keyup(e) {
    const key = e.key.toLowerCase();
    const keyPosition = KEY_ARRAY.indexOf(key);

    if (keyPosition >= 0) {
      this.keyMap.set(key, false);
    }
  }
}
