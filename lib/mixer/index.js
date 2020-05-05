import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class Mixer extends AudioNode {
  constructor() {
    super();
    this.gain = getAudioContext().createGain();
  }

  get audioNode() {
    return this.gain;
  }

  get numberOfInputs() {
    return this.gain.numberOfInputs;
  }

  set numberOfInputs(number) {
    this.gain.numberOfInputs = number;
  }
}
