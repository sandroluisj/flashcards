let {flashcard} = require("../data")
function criarFlashcard(flashcards){
    flashcards.id = flashcard.length + 1;
    flashcard.push(flashcards)
}
module.exports = criarFlashcard