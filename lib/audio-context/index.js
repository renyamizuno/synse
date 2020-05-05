const SynseAudioContext = window.AudioContext || window.webkitAudioContext;
let synseAudioContextInstances = null;

// eslint-disable-next-line jsdoc/require-jsdoc
export default function getAudioContext() {
  return synseAudioContextInstances || (synseAudioContextInstances = new SynseAudioContext());
}
