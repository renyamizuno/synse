import NoImplementedError from './no-implemented-error';

export default class AudioNode {
  get audioNode() {
    throw new NoImplementedError(this, 'audioNode');
  }

  outputConnect(outputNode) {
    this.audioNode.connect(outputNode.audioNode);
  }
}
