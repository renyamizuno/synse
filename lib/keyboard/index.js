const KEY_ARRAY = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

export default class Keyboard {
  constructor(targetVCO, targetVCA, targetDOM = window.document) {
    this.baseFrequency = 261.63;
    this.targetDOMNode = targetDOM;
    this.keypushState = false;
    this.targetVCA = targetVCA;
    this.targetVCO = targetVCO;
    this.targetDOMNode.addEventListener('keypress', this.keypress.bind(this));
    this.targetDOMNode.addEventListener('keyup', this.keyup.bind(this));
  }

  keypress(e) {
    const keyPosition = KEY_ARRAY.indexOf(e.key);

    this.targetVCO.frequency = this.baseFrequency * Math.pow(2, keyPosition / 12);
    if (!this.keypushState) {
      this.targetVCA.triggerOn();
    }
    this.keypushState = true;
  }

  keyup() {
    if (this.keypushState) {
      this.targetVCA.triggerOff();
    }
    this.keypushState = false;
  }
}
