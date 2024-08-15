let {flashcard} = require("../data")
function atualizarFlashcard(flashcards, novoFlashcards){
    let index = flashcard.findIndex(flashcards => flashcards.id === id);
    flashcard[index] = {id, ...novoFlashcards} 

}
module.exports = atualizarFlashcard