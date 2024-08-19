const { flashcard } = require('../data')

function buscarFlashcardsPorBaralho(idBaralho) {
    return flashcard.filter(flashcards => flashcards.idBaralho === idBaralho)
}

module.exports = buscarFlashcardsPorBaralho