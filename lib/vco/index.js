import getAudioContext from '../audio-context';

export default class VCO {
  constructor() {
    this.oscillator = getAudioContext().createOscillator();
    this.oscillator.start();
  }

  set frequency(value) {
    this.oscillator.frequency.value = value;
  }

  get frequency() {
    return this.oscillator.frequency.value;
  }

  outputConnect(audioNode) {
    this.oscillator.connect(audioNode);
  }
}
