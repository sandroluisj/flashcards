let  {flashcard} = require("../data")
function deletarFlashcard(){
    let index = flashcard.findIndex(flashcards => flashcards.id === id);
   flashcard.splice(id, 1)
   console.log ("removido")
}
module.exports = deletarFlashcard