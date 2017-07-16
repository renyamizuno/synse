import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class VCF extends AudioNode {
  constructor() {
    super();
    this.lowpass = getAudioContext().createBiquadFilter();
    this.highpass = getAudioContext().createBiquadFilter();

    this.lowpass.frequency.value = this.lowpass.frequency.maxValue;
    this.highpass.frequency.value = this.highpass.frequency.minValue;

    this.highpass.connect(this.lowpass);
  }

  get audioNode() {
    return this.highpass;
  }

  set highpassFrequency(f) {
    this.highpass.frequency.value = f;
  }

  get highpassFrequency() {
    return this.highpass.frequency.value;
  }

  set lowpassFrequency(f) {
    this.lowpass.frequency.value = f;
  }

  get lowpassFrequency() {
    return this.lowpass.frequency.value;
  }

  outputConnect(outputNode) {
    this.lowpass.connect(outputNode.audioNode);
  }
}
