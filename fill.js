// initialized variables
const input = document.querySelector(".input");
const Next = document.querySelector(".next-btn");
const start = document.querySelector(".start-span");
const Hint = document.querySelector(".hint-span");
const Typing = document.querySelector(".typing");
let isWinner = false;
let charIndex = 0;
let word;

// function to generate random word from list
function randomWord(){
    charIndex = 0;
    Typing.value = "";
    // generate random word
    let randObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = randObj.name;
    let html = "";

    // set hint & start letter
    Hint.innerHTML = randObj.hint;
    start.innerHTML = randObj.start;

    // set input box as same as letter of word
    for (let i = 0; i < word.length; i++) {
        html += '<input type="text" disabled>';
    }
    input.innerHTML = html;
}

randomWord();

// main logic or checking function letters are right or wrong
function initGame(e){
    let keyword = Typing.value;
    key = Typing.value.split('');
    
    // if typed charcter is null or backspace then logic
    if(key[charIndex] == null){
        charIndex--;
        input.querySelectorAll("input")[charIndex].value = "";
    }
    else{

        // typed charcter is set in input box
        input.querySelectorAll("input")[charIndex].value = key[charIndex];

        // if character is true then color green otherwise red
        if(word[charIndex] === key[charIndex]){
            input.querySelectorAll("input")[charIndex].style.color = 'rgb(28, 102, 28)'
        }
        else{
            input.querySelectorAll("input")[charIndex].style.color = 'rgb(196, 41, 41)'
        }

        // is word is right then isWinner condition is true
        if(keyword === word){
            isWinner = true;
        }
        charIndex++;
    }
}

// if word is right then next word is generate
Next.addEventListener('click', ()=>{
    if(isWinner){
        randomWord();
        isWinner = false
    }    
});

// when type a letter automatic start typing
document.addEventListener('keydown', () => Typing.focus());

// called a init function when someone give input
Typing.addEventListener('input', initGame);