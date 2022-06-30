const wordContainer = document.getElementById("wordContainer");
const startButton = document.getElementById("start");
const title = document.getElementById("titulo");
const usedLettersElement = document.getElementById("usedLetters");
const modalG = document.querySelector("modal-ganaste");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

var selectedWord;
var usedLetters;
var mistakes;
var hits;

const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
}

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const wrongLetter = () => {
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
/*
    if(mistakes === bodyParts.length) {
        endGame(alert ("!ESTAS MUERTO¡"));
    }
*/
    
    if(mistakes === bodyParts.length) endGame(swal.fire({
        title: "¡Perdiste!",
        icon: 'error',
        background: '#050c17',
        color: 'red',
        showConfirmButton: false,
        customClass: {
            popup: 'perdiste',
        },
        timer:'3000'
    }))
}

const endGame = () => {
    document.removeEventListener('keydown', letterEvent);
    startButton.style.display = 'block';
}

const correctLetter = letter => {
    const { children } =  wordContainer;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden');
            hits++;
        }
    }
/*
    if(hits === selectedWord.length) {
        endGame(alert ("!FELICIDADES, GANASTE¡"));
    }
*/
    
    if(hits === selectedWord.length) endGame(swal.fire({
        title: "¡Ganaste!",
        icon: 'success',
        background: '#050c17',
        color: 'green',
        showConfirmButton: false,
        customClass: {
            popup: 'ganaste',
        },
        timer: '3000'
    }));
}

const letterInput = letter => {
    if(selectedWord.includes(letter)) {
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
};

const letterEvent = event => {
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter);
    };
};

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    });
};

const selectRandomWord = () => {
    var word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
};

const drawHangMan = () => {
    ctx.canvas.width  = 260;
    ctx.canvas.height = 320;
    ctx.scale(40, 40);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 5, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';
    title.style.display = 'none';
    drawHangMan();
    selectRandomWord();
    drawWord();
    document.addEventListener('keydown', letterEvent);
};

startButton.addEventListener("click", startGame);