const { flashcard } = require('../dados.js')

function buscarFlashcardsPorBaralho(idBaralho) {
    return flashcard.filter(flashcards => flashcards.idBaralho === idBaralho)
}

module.exports = buscarFlashcardsPorBaralho