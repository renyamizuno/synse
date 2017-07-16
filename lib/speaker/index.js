import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class Speaker extends AudioNode {
  constructor() {
    super();
    const context = getAudioContext();

    this.gainNode = context.createGain();
    this.destination = context.destination;
    this.gainNode.connect(this.destination);
  }

  get audioNode() {
    return this.gainNode;
  }

  set volume(value) {
    this.gainNode.gain.value = value;
  }

  get volume() {
    return this.gainNode.gain.value;
  }
}
