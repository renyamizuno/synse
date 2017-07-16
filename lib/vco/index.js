import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class VCO extends AudioNode {
  constructor() {
    super();
    this.oscillator = getAudioContext().createOscillator();
    this.oscillator.start();
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
}
