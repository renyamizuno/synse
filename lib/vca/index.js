import AudioNode from '../audio-node';
import getAudioContext from '../audio-context';

export default class VCA extends AudioNode {
  constructor() {
    super();
    this.gain = getAudioContext().createGain();
    this.level = 0;

    this.attackTime = 100;
    this.decayTime = 100;
    this.releaseTime = 100;

    this.sustainLevel = 0.7;
  }

  get audioNode() {
    return this.gain;
  }

  get maxLevel() {
    return 1;
  }

  get minLevel() {
    return 0;
  }

  get level() {
    return this.gain.gain.value;
  }

  set level(level) {
    const fixLevel = Math.max(Math.min(level, this.maxLevel), this.minLevel);

    this.gain.gain.value = fixLevel;
  }

  triggerOn() {
    this.triggerOnTimeStamp = Date.now();
    this.triggerOffTimeStamp = null;

    const push = () => {
      setTimeout(() => {
        const time = Date.now() - this.triggerOnTimeStamp;
        const subtractionTime = time - this.attackTime;

        if (!this.triggerOffTimeStamp) {
          if (this.attackTime > time) {
            this.level = this.maxLevel * (time / this.attackTime);
          } else if (this.decayTime > subtractionTime) {
            this.level = this.maxLevel - (this.maxLevel - this.sustainLevel) * (subtractionTime / this.decayTime);
          } else {
            this.level = this.sustainLevel;
          }
          push();
        }
      }, 1);
    };

    push();
  }

  triggerOff() {
    this.triggerOnTimeStamp = null;
    this.triggerOffTimeStamp = Date.now();
    const nowLevel = this.level;

    const relese = () => {
      setTimeout(() => {
        const time = Date.now() - this.triggerOffTimeStamp;

        this.level = nowLevel - nowLevel * (time / this.releaseTime);
        if (!this.triggerOnTimeStamp) {
          if (this.releaseTime < time || this.level === 0) {
            this.level = 0;
          } else {
            relese();
          }
        }
      }, 1);
    };

    relese();
  }
}
