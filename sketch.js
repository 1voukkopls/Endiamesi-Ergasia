let startButton;
let nextButton;
let soundButton;
let isStarted = false;
let isNextPressed = false;
let img;
let sound;

function preload() {
  img = loadImage('artwork.jpg');
  sound = loadSound('seawaves.mp3');
}

function setup() {
  createCanvas(960, 485);

  startButton = createButton('ΕΝΑΡΞΗ');
  startButton.position(width / 2 - startButton.width / 2, height / 2);
  startButton.style('width', '100px');
  startButton.style('height', '50px');
  startButton.style('font-size', '20px');
  startButton.mousePressed(() => {
    isStarted = true;
    startButton.style('display', 'none'); 
    nextButton.style('display', 'inline');
    soundButton.style('display', 'inline'); 
  });

  nextButton = createButton('ΠΛΗΡΟΦΟΡΙΕΣ');
  nextButton.position(width / 6 - nextButton.width / 1, height - 40);
  nextButton.mousePressed(showNextLayer);
  nextButton.style('display', 'none');
  
  soundButton = createButton('ΗΧΟΤΟΠΙΟ');
  soundButton.position(width - 190, height - 40);
  soundButton.style('width', '85px');
  soundButton.style('height', '25px');
  soundButton.style('font-size', '13px');
  soundButton.mousePressed(playSound);
  soundButton.style('display', 'none'); 
}

function draw() {
  if (isStarted) {
    image(img, 0, 0, width, height); 
      if (isNextPressed) {
      
      fill(0);
      noStroke();
      rectMode(CENTER);
      let boxWidth = 400;  
      let boxHeight = 100;  
      rect(width / 2, height / 1.78, boxWidth, boxHeight);

      
      fill(255);
      textSize(14);
      textAlign(CENTER, CENTER);
      text("Το έργο “Βάρκες και παιδιά στην παραλία” είναι", width / 2, height / 2);
      text("ενα έργο του Κωνσταντίνου Βολανάκη, γνωστός ", width / 2, height / 1.9)
      text("και ως ο «πατέρας της ελληνικής θαλασσογραφίας.»", width / 2, height / 1.8)
      text("Το έργο είναι φτιαγμενο με λάδι σε μουσαμά»", width / 2, height / 1.7)
      text("και έχει μέγεθος 30 x 60εκ.   ", width / 2, height / 1.6)
    }
  } else {
        background(0);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("“Βάρκες και παιδιά στην παραλία”", width / 2, height / 2 - 30);
  }
}

function showNextLayer() {
  isNextPressed = !isNextPressed; 
}

function playSound() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}