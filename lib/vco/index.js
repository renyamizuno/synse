import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class VCO extends AudioNode {
  static get waveTypes() {
    return {
      sine: 'sine',
      square: 'square',
      sawtooth: 'sawtooth',
      triangle: 'triangle'
    };
  }

  constructor() {
    super();
    this.oscillator = getAudioContext().createOscillator();
    this.magnification = 1;
    this.oscillator.start();
  }

  set magnification(value) {
    this.magnification = Math.max(Number.parseInt(value, 10), 1);
  }

  get audioNode() {
    return this.oscillator;
  }

  set frequency(value) {
    this.oscillator.frequency.value = value;
  }

  get frequency() {
    return this.oscillator.frequency.value;
  }

  set waveType(waveType) {
    this.oscillator.type = waveType;
  }

  get waveType() {
    return this.oscillator.type;
  }
}
