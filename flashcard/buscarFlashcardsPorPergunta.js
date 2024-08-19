const { flashcard } = require('../dados.js')

function buscarFlashcardsPorPergunta(pergunta) {
    return flashcard.filter(flashcards => flashcards.pergunta.toLocaleLowerCase().includes(pergunta.toLocaleLowerCase()))
}

module.exports = buscarFlashcardsPorPergunta