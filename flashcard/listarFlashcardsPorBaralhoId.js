const { flashcard } = require('../dados.js')

function listarFlashcardsPorBaralhoId(idBaralho) {
    flashcard.filter(flashcards => flashcards.idBaralho === idBaralho).forEach(flashcards => {
        console.log(`
        ID: ${flashcards.id}
        Pergunta: ${flashcards.pergunta}
        Resposta: ${flashcards.resposta}
        `)
    })
}

module.exports = listarFlashcardsPorBaralhoId