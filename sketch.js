let audioStarted = false;
let audioCtx;
let lastNoteTime = 0;

// Satie-style: D minor / modal scale frequencies
// D3, F3, A3, C4, D4, E4, F4, A4, C5, D5, F5, A5
const satieNotes = [146.83, 174.61, 220, 261.63, 293.66, 329.63, 349.23, 440, 523.25, 587.33, 698.46, 880];

function playNote(freq, duration, volume, delay) {
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();
  let filter = audioCtx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.value = freq;

  // soft piano-like envelope
  filter.type = 'lowpass';
  filter.frequency.value = 1200;
  filter.Q.value = 1;

  let t = audioCtx.currentTime + delay;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(volume * 0.6, t + duration * 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(t);
  osc.stop(t + duration);
}

function setupAudio() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  audioStarted = true;
  
  // 오디오 프롬프트 숨기기
  document.body.classList.add('audio-active');
  console.log("🎵 Audio activated - 28 yellow stars begin to sing");
}

function mousePressed() {
  if (!audioStarted) {
    setupAudio();
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  frameRate(60);
}

function draw() {
  background(84, 119, 146, 25);

  let cx = width / 2;
  let cy = height / 2;

  noStroke();
  colorMode(RGB);

  // 28개의 별 (28수, 28자모)
  for (let i = 0; i < 28; i++) {
    let dir = i % 2 === 0 ? 1 : -1;
    let angle = TWO_PI / 28 * i + frameCount * 0.001 * dir;
    let rx = 250 + i * 20;
    let ry = 120 + i * 10;
    let tilt = i * PI / 28;
    let ox = cos(angle) * rx;
    let oy = sin(angle) * ry;
    let x = cx + ox * cos(tilt) - oy * sin(tilt);
    let y = cy + ox * sin(tilt) + oy * cos(tilt);
    let baseSize = (30 + i * 12) * 0.3 * 0.2;
    let size = baseSize + sin(frameCount * 0.02 + i * 0.7) * baseSize * 0.3;
    
    // Yellow glowing stars
    colorMode(RGB);
    let glowPulse = sin(frameCount * 0.02 + i * 0.7);
    drawingContext.shadowBlur = 50 + glowPulse * 40;
    drawingContext.shadowColor = 'rgba(255,255,0,0.9)';
    
    noFill();
    stroke(255, 255, 0, 120 + glowPulse * 80);
    strokeWeight(size * 0.54);
    ellipse(x, y, size, size);
    noStroke();
    drawingContext.shadowBlur = 0;
    
    // Satie circles: sparse gentle notes triggered by position
    if (audioStarted) {
      let normY = y / height;
      // play a note when circle crosses the center Y axis
      if (abs(y - cy) < 8 && millis() - lastNoteTime > 300) {
        let noteIdx = i % satieNotes.length;
        let vol = map(size, baseSize * 0.7, baseSize * 1.3, 0.04, 0.1);
        playNote(satieNotes[noteIdx], 3.5, vol, 0);
        // sometimes add a gentle third or fifth
        if (random() < 0.4) {
          let harmIdx = (noteIdx + 2) % satieNotes.length;
          playNote(satieNotes[harmIdx], 4, vol * 0.5, 0.2);
        }
        if (random() < 0.25) {
          let fifthIdx = (noteIdx + 4) % satieNotes.length;
          playNote(satieNotes[fifthIdx], 3, vol * 0.35, 0.4);
        }
        lastNoteTime = millis();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
