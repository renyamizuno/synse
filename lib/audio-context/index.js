const SynseAudioContext = window.AudioContext || window.webkitAudioContext;

export default function getAudioContext() {
  return window.__synse_audio_context__ || (window.__synse_audio_context__ = new SynseAudioContext());
}
