let {flashcard} = require("../data")
function listarFlashcards(){
    flashcard.forEach((flashcards) => {
        console.log(`${flashcards.id} flashcards: ${flashcards.pergunta} resposta ${flashcards.resposta}  id baralho: ${flashcards.idBaralho}`)
    })
}
module.exports = listarFlashcards