const WORDBANK_1 = [
    "adj", "adj", "adj", "adj", "adj", "adj",
    "adv",
    "color",
    "noun", "noun", "noun", "noun", "noun", "noun",
    "num",
    "plNoun"
];

const ANSWERS = [];

let counter = 0;

function getWords() {
    let length = WORDBANK_1.length;
    let speechPart;

    // begin game
    if (counter == 0) {
        document.getElementById('heading').style.display = "none";
        document.getElementById('play').style.display = "none";
        document.getElementById('game').style.display = "initial";
    }
    // record inputs
    else if (counter <= length) {
        ANSWERS[counter-1] = document.getElementById('fill-in').value;
        if (!ANSWERS[counter-1]) {
            // decrement the counter if there's no input
            // makes sure there's an answer before continuing
            counter -= 1;
        }
        // console.log(ANSWERS[counter-1]);
    }

    // end game, write story
    if (counter == length) {
        let story = writeStory();
        document.getElementById('story').innerHTML = story;
        document.getElementById('play').innerHTML = "PLAY AGAIN!";
        document.getElementById('game').style.display = "none";
        document.getElementById('story').style.display = "initial";
        document.getElementById('play').style.display = "block";
        counter += 1;
    }
    // restart game
    else if  (counter > length) {
        counter = 0;
        document.getElementById('story').style.display = "none";
        document.getElementById('play').style.display = "none";
        document.getElementById('game').style.display = "initial";
    }

    // focus the input field after each input
    document.getElementById("fill-in").focus();

    if (counter < length) {
        if (WORDBANK_1[counter] == "adj") {
            speechPart = "n adjective";
        }
        else if (WORDBANK_1[counter] == "adv") {
            speechPart = "n adverb";
        }
        else if (WORDBANK_1[counter] == "color") {
            speechPart = " color";
        }
        else if (WORDBANK_1[counter] == "noun") {
            speechPart = " noun";
        }
        else if (WORDBANK_1[counter] == "num") {
            speechPart = " number";
        }
        else if (WORDBANK_1[counter] == "plNoun") {
            speechPart = " plural noun";
        }

        document.getElementById('speech-part').innerHTML = speechPart;
        console.log(counter);
        console.log(WORDBANK_1[counter]);

        counter += 1;
    }
}

function writeStory () {
    let storyOne = `It has often been said that a dog is a man's best ${ANSWERS[8]}. Dogs are very ${ANSWERS[0]} and can be taught many ${ANSWERS[1]}
    tricks. A dog can be trained to carry a ${ANSWERS[9]} in his mouth.
    If you throw his ${ANSWERS[10]}, he will run and fetch it. Dogs
    will also bark ${ANSWERS[6]} if someone tries to break into your
    ${ANSWERS[11]} during the night. One of the most popular canine pets
    today is the ${ANSWERS[12]} Spaniel. Spaniels have curly ${ANSWERS[7]}
    coats and ${ANSWERS[2]} ears. They also have very ${ANSWERS[3]}
    dispositions and live to be ${ANSWERS[14]} years old. Other popular dogs
    are ${ANSWERS[4]} Terriers, German ${ANSWERS[15]}, and the
    ${ANSWERS[5]} Poodle. Every ${ANSWERS[13]} should have a loyal dog.`

    return storyOne;
}

/*
// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1;
// Assign an adjective
let adj2;
// Assign an adjective
let adj3;
// Assign an adjective
let adj4;
// Assign an adjective
let adj5;
// Assign an adjective
let adj6;
// Assign an adverb
let adverb;
// Assign a color
let color;
// Assign a noun
let noun1;
// Assign a noun
let noun2;
// Assign a noun
let noun3;
// Assign a noun
let noun4;
// Assign a noun
let noun5;
// Assign a noun
let noun6;
// Assign a number
let num;
// Assign a plural noun
let pnoun1;


// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE

//Using template literals to plug in the values
let storyOne = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(storyOne);
*/