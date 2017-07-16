const KEY_ARRAY = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

export default class Keyboard {
  constructor(targetVCO, targetDOM = window.document) {
    this.baseFrequency = 261.63;
    this.targetDOMNode = targetDOM;
    this.keypushState = false;
    this.targetVCO = targetVCO;
  }

  initial() {
    this.targetDOMNode.addEventListener('keypress', this.keypress);
    this.targetDOMNode.addEventListener('keyup', this.keyup);
  }

  keypress(e) {
    const keyPosition = KEY_ARRAY.indexOf(e.char);

    this.keypushState = true;
    this.targetVCO.frequency = this.baseFrequency * Math.pow(2, keyPosition / 12);
  }

  keyup() {
    this.keypushState = false;
  }
}
