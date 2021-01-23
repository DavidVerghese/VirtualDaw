let drumDistortionValue = 0.8;
let drumDistortionOn = false;

let bassDistortion = 0.0;
let organDistortion = 0.0;
let violinDistortion = 0.0;



function sequencer() {
    // Tone.Player() is like a query selector for sound files
    // toMaster connects the sound file to the master output
    // allowing you to control the volume
  
  
  // WEB AUDIO STUFF 
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    const audioContext = new AudioContext();
    
    const audioCtx = new AudioContext();
        const audio = new Audio('./drums/kick-electro01.wav');
        
    const source = audioCtx.createMediaElementSource(audio);
  source.connect(audioCtx.destination);
  
    // DRUM SOUNDS
    
  // var drumDistortion = new Tone.Distortion(drumDistortionValue).toMaster();
  var bassDistortion = new Tone.Distortion(0.0).toMaster();
  var organDistortion = new Tone.Distortion(0.0).toMaster();
  var violinDistortion = new Tone.Distortion(0.0).toMaster();
  let drumDistortion = new Tone.Distortion(drumDistortionValue).toMaster();
    
  
  
    const kick = new Tone.Player('./drums/kick-electro01.wav').toMaster();
    const snare = new Tone.Player('./drums/snare-electro.wav').toMaster();
    const hihat = new Tone.Player('./drums/hihat-electro.wav').toMaster();
    const lowTom = new Tone.Player('./drums/low-tom.wav').toMaster();
    const midTom = new Tone.Player('./drums/mid-tom.wav').toMaster();
    const highTom = new Tone.Player('./drums/high-tom.wav').toMaster();
    const rideCymbal = new Tone.Player('./drums/ride-cymbal.wav').toMaster();
    const crashCymbal = new Tone.Player('./drums/crash-cymbal.wav').toMaster();
    // BASS SOUNDS
    const bassHighC = new Tone.Player('./drums/bass-low-c.wav').connect(bassDistortion).toMaster();
    const bassB1 = new Tone.Player('./drums/bass-b1.wav').connect(bassDistortion).toMaster();
    const bassA1 = new Tone.Player('./drums/bass-a1.wav').connect(bassDistortion).toMaster();
    const bassG1 = new Tone.Player('./drums/bass-g1.wav').connect(bassDistortion).toMaster();
    const bassF1 = new Tone.Player('./drums/bass-f1.wav').connect(bassDistortion).toMaster();
    const bassE1 = new Tone.Player('./drums/bass-e1.wav').connect(bassDistortion).toMaster();
    const bassD1 = new Tone.Player('./drums/bass-d1.wav').connect(bassDistortion).toMaster();
    const bassC1 = new Tone.Player('./drums/bass-c1.wav').connect(bassDistortion).toMaster();
    // ORGAN SOUNDS
    const organC5 = new Tone.Player('./drums/organ-c5.wav').connect(organDistortion).toMaster();
    const organB4 = new Tone.Player('./drums/organ-b4.wav').connect(organDistortion).toMaster();
    const organA4 = new Tone.Player('./drums/organ-a4.wav').connect(organDistortion).toMaster();
    const organG4 = new Tone.Player('./drums/organ-g4.wav').connect(organDistortion).toMaster();
    const organF4 = new Tone.Player('./drums/organ-f4.wav').connect(organDistortion).toMaster();
    const organE4 = new Tone.Player('./drums/organ-e4.wav').connect(organDistortion).toMaster();
    const organD4 = new Tone.Player('./drums/organ-d4.wav').connect(organDistortion).toMaster();
    const organC4 = new Tone.Player('./drums/organ-c4.wav').connect(organDistortion).toMaster();
    // VIOLIN SOUNDS
    const violinC5 = new Tone.Player('./drums/violin-c5.wav').connect(violinDistortion).toMaster();
    const violinB4 = new Tone.Player('./drums/violin-b4.wav').connect(violinDistortion).toMaster();
    const violinA4 = new Tone.Player('./drums/violin-a4.wav').connect(violinDistortion).toMaster();
    const violinG4 = new Tone.Player('./drums/violin-g4.wav').connect(violinDistortion).toMaster();
    const violinF4 = new Tone.Player('./drums/violin-f4.wav').connect(violinDistortion).toMaster();
    const violinE4 = new Tone.Player('./drums/violin-e4.wav').connect(violinDistortion).toMaster();
    const violinD4 = new Tone.Player('./drums/violin-d4.wav').connect(violinDistortion).toMaster();
    const violinC4 = new Tone.Player('./drums/violin-c4.wav').connect(violinDistortion).toMaster();
   

  
    let index = 0;

    // Tone.Transport.scheduleRepeats controls the timing 
    // of musical events 
    // this means we want the function 'repeat' to repeat
    // after every 8 notes 
    Tone.Transport.scheduleRepeat(repeat, '8n');
    Tone.Transport.start();
  function repeat() {
      // step goes from 0-7 repeatedly 
      let step = index % 8;
      // console.log(index, step);
      beatCount = step;
      document.querySelector("#beat-count").innerText = `beat count: ${beatCount+1}`;
      // step goes from 1-8 repeatedly 
      // The :nth-child() CSS pseudo-class matches 
      // elements based on their position in a group of siblings.
    
    
    // WEB AUDIO 


    //VOLUME
    const gainNode = audioCtx.createGain();
    const volumeControl = document.querySelector('#volume');
      volumeControl.addEventListener('input', function() {
          gainNode.gain.value = this.value;
      }, false);

    //PANNER
    const stereoPannerNode = audioCtx.createStereoPanner();
    stereoPannerNode.connect(audioCtx.destination);
    const pannerControl = document.querySelector('#panner');
    pannerControl.addEventListener('input', function() {
        stereoPannerNode.pan.value = this.value;
    }, false);
    // const pannerOptions = { pan: 1 };
    // const panner = new StereoPannerNode(audioCtx, pannerOptions);
    // stereoPannerNode.pan.value = -1;
    source.connect(gainNode).connect(stereoPannerNode).destination;
    
// WEB AUDIO 
    
    
    
      // DRUM VARIABLES
      let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
      let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
      let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
      let lowTomInputs = document.querySelector(`.low-tom input:nth-child(${step + 1})`);
      let midTomInputs = document.querySelector(`.mid-tom input:nth-child(${step + 1})`);
      let highTomInputs = document.querySelector(`.high-tom input:nth-child(${step + 1})`);
      let rideCymbalInputs = document.querySelector(`.ride-cymbal input:nth-child(${step + 1})`);
      let crashCymbalInputs = document.querySelector(`.crash-cymbal input:nth-child(${step + 1})`);
      // BASS VARIABLES
      let bassHighCInputs = document.querySelector(`.bass-high-c input:nth-child(${step + 1})`);
      let bassB1Inputs = document.querySelector(`.bass-b1 input:nth-child(${step + 1})`);
      let bassA1Inputs = document.querySelector(`.bass-a1 input:nth-child(${step + 1})`);
      let bassG1Inputs = document.querySelector(`.bass-g1 input:nth-child(${step + 1})`);
      let bassF1Inputs = document.querySelector(`.bass-f1 input:nth-child(${step + 1})`);
      let bassE1Inputs = document.querySelector(`.bass-e1 input:nth-child(${step + 1})`);
      let bassD1Inputs = document.querySelector(`.bass-d1 input:nth-child(${step + 1})`);
      let bassC1Inputs = document.querySelector(`.bass-c1 input:nth-child(${step + 1})`);
      // // ORGAN VARIABLES
      let organC5Inputs = document.querySelector(`.organ-c5 input:nth-child(${step + 1})`);
      let organB4Inputs = document.querySelector(`.organ-b4 input:nth-child(${step + 1})`);
      let organA4Inputs = document.querySelector(`.organ-a4 input:nth-child(${step + 1})`);
      let organG4Inputs = document.querySelector(`.organ-g4 input:nth-child(${step + 1})`);
      let organF4Inputs = document.querySelector(`.organ-f4 input:nth-child(${step + 1})`);
      let organE4Inputs = document.querySelector(`.organ-e4 input:nth-child(${step + 1})`);
      let organD4Inputs = document.querySelector(`.organ-d4 input:nth-child(${step + 1})`);
      let organC4Inputs = document.querySelector(`.organ-c4 input:nth-child(${step + 1})`);
      // VIOLIN VARIABLES
      let violinC5Inputs = document.querySelector(`.violin-c5 input:nth-child(${step + 1})`);
      let violinB4Inputs = document.querySelector(`.violin-b4 input:nth-child(${step + 1})`);
      let violinA4Inputs = document.querySelector(`.violin-a4 input:nth-child(${step + 1})`);
      let violinG4Inputs = document.querySelector(`.violin-g4 input:nth-child(${step + 1})`);
      let violinF4Inputs = document.querySelector(`.violin-f4 input:nth-child(${step + 1})`);
      let violinE4Inputs = document.querySelector(`.violin-e4 input:nth-child(${step + 1})`);
      let violinD4Inputs = document.querySelector(`.violin-d4 input:nth-child(${step + 1})`);
      let violinC4Inputs = document.querySelector(`.violin-c4 input:nth-child(${step + 1})`);
      if (kickInputs.checked) {
        // kick.start();
        audio.play();
      }
      if (snareInputs.checked) {
        snare.start();
      }
      if (hihatInputs.checked) {
        hihat.start();
      }
      if (lowTomInputs.checked) {
        lowTom.connect(drumDistortion).start();
        lowTom.start();
      }
      if (midTomInputs.checked) {
        midTom.start();
      }
      if (highTomInputs.checked) {
        highTom.start();
      }
      if (rideCymbalInputs.checked) {
        rideCymbal.start();
      }
      if (crashCymbalInputs.checked) {
        crashCymbal.start();
      }
      if (bassHighCInputs.checked) {
        bassHighC.start();
      }
      if (bassB1Inputs.checked) {
        bassB1.start();
      }
      if (bassA1Inputs.checked) {
        bassA1.start();
      }
      if (bassG1Inputs.checked) {
        bassG1.start();
      }
      if (bassF1Inputs.checked) {
        bassF1.start();
      }
      if (bassE1Inputs.checked) {
        bassE1.start();
      }
      if (bassD1Inputs.checked) {
        bassD1.start();
      }
      if (bassC1Inputs.checked) {
        bassC1.start();
      }
      if (organC5Inputs.checked) {
        organC5.start();
      }
      if (organB4Inputs.checked) {
        organB4.start();
      }
      if (organA4Inputs.checked) {
        organA4.start();
      }
      if (organG4Inputs.checked) {
        organG4.start();
      }
      if (organF4Inputs.checked) {
        organF4.start();
      }
      if (organE4Inputs.checked) {
        organE4.start();
      }
      if (organD4Inputs.checked) {
        organD4.start();
      }
      if (organC4Inputs.checked) {
        organC4.start();
      }
      if (violinC5Inputs.checked) {
        violinC5.start();
      }
      if (violinB4Inputs.checked) {
        violinB4.start();
      }
      if (violinA4Inputs.checked) {
        violinA4.start();
      }
      if (violinG4Inputs.checked) {
        violinG4.start();
      }
      if (violinF4Inputs.checked) {
        violinF4.start();
      }
      if (violinE4Inputs.checked) {
        violinE4.start();
      }
      if (violinD4Inputs.checked) {
        violinD4.start();
      }
      if (violinC4Inputs.checked) {
        violinC4.start();
      }
      index++;
    }
}

document.querySelector("#startbutton").addEventListener("click", function (e) { e.preventDefault(); sequencer() });
document.querySelector("#stopbutton").addEventListener("click", function (e) { location.reload(); });
document.querySelector("#drum-distortion").addEventListener("click", function (e) { e.preventDefault(); drumDistortionOn = !drumDistortionOn; });
