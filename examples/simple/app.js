const { Keyboard, VCA, VCF, VCO, Mixer, Speaker } = synse;

const startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', () => {
  // create synthesizer!
  const vco1 = new VCO();
  const vco2 = new VCO();
  const vcf = new VCF();
  const vca = new VCA();
  const mixer = new Mixer();
  const speaker = new Speaker();
  vco1.outputConnect(mixer);
  vco2.outputConnect(mixer);
  mixer.outputConnect(vcf);
  vcf.outputConnect(vca);
  vca.outputConnect(speaker);

  new Keyboard([vco1, vco2], vca);

  // init controllers.
  const waveTypeSelect1 = document.querySelector('.js-oscillator1-wave-type');
  const magnification1 = document.querySelector('.js-oscillator1-magnification');
  const waveTypeSelect2 = document.querySelector('.js-oscillator2-wave-type');
  const magnification2 = document.querySelector('.js-oscillator2-magnification');

  const lowpass = document.querySelector('.js-low-pass');
  const highpass = document.querySelector('.js-high-pass');
  const attackTime = document.querySelector('.js-attack-time');
  const decayTime = document.querySelector('.js-decay-time');
  const sustainLevel = document.querySelector('.js-sustain-level');
  const releaseTime = document.querySelector('.js-release-time');
  const volume = document.querySelector('.js-volume');

  Object.values(VCO.waveTypes).forEach(w => {
    const o = document.createElement('option');
    o.value = w;
    o.text = w;
    if (w === vco1.waveType) {
      o.selected = true;
    }
    waveTypeSelect1.appendChild(o);
  });

  Object.values(VCO.waveTypes).forEach(w => {
    const o = document.createElement('option');
    o.value = w;
    o.text = w;
    if (w === vco2.waveType) {
      o.selected = true;
    }
    waveTypeSelect2.appendChild(o);
  });

  magnification1.value = vco1.magnification;
  magnification2.value = vco2.magnification;
  lowpass.value = vcf.lowpassFrequency;
  highpass.value = vcf.highpassFrequency;
  attackTime.value = vca.attackTime;
  decayTime.value = vca.decayTime;
  sustainLevel.value = vca.sustainLevel;
  releaseTime.value = vca.releaseTime;
  volume.value = speaker.volume;

  waveTypeSelect1.addEventListener('change', e => {
    vco1.waveType = e.target.value;
  });

  magnification1.addEventListener('change', e => {
    vco1.magnification = Number.parseInt(e.target.value, 10);
  });

  waveTypeSelect2.addEventListener('change', e => {
    vco2.waveType = e.target.value;
  });

  magnification2.addEventListener('change', e => {
    vco2.magnification = Number.parseInt(e.target.value, 10);
  });

  lowpass.addEventListener('change', e => {
    vcf.lowpassFrequency = e.target.value;
  });

  highpass.addEventListener('change', e => {
    vcf.highpassFrequency = e.target.value;
  });

  attackTime.addEventListener('change', e => {
    vca.attackTime = e.target.value;
  });

  decayTime.addEventListener('change', e => {
    vca.decayTime = e.target.value;
  });

  sustainLevel.addEventListener('change', e => {
    vca.sustainLevel = e.target.value;
  });

  releaseTime.addEventListener('change', e => {
    vca.releaseTime = e.target.value;
  });

  volume.addEventListener('change', e => {
    speaker.volume = e.target.value;
  });
});
