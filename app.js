const prompt = require ("prompt-sync")();
const autualizarBaralho = require ("./baralho/atualizarBaralho")
const criarBaralho = require ("./baralho/criarBaralho")
const deletarBaralho = require ("./baralho/deletarBaralho")
const listarBaralhos = require ("./baralho/listarBaralhos")
const atualizarFlashcard = require ("./flashcard/atualizarFlashcard")
const buscarFlashcardsPorBaralho = require ("./flashcard/buscarFlashcardsPorBaralho")
const buscarFlashcardsPorPergunta = require ("./flashcard/buscarFlashcardsPorPergunta")
const criarFlashcard = require ("./flashcard/criarFlashcard")
const deletarFlashcard = require ("./flashcard/deletarFlashcard")
const findFlashcardIndexById = require ("./flashcard/findFlashcardIndexById")
const listarFlashcards = require ("./flashcard/listarFlashcards")
const listarFlashcardsPorBaralhoId = require ("./flashcard/listarFlashcardsPorBaralhoId")
let baralho = require('./data');
let flashcard = require('./data')

menu()
function menu(){
    console.log(`
            menu
            1. Criar Baralho
            2. Criar Flashcard
            3. Listar Baralhos
            4. Listar Flashcards
            5. Listar Flashcards por Baralho
            6. Atualizar Baralho
            7. Atualizar Flashcard
            8. Deletar Baralho
            9. Deletar Flashcard
            10. Buscar Flashcards por Pergunta
            11. Buscar Flashcards por Baralho
            0. Sair`)
            const opcao = prompt("escolha uma opção: ")
            switch(opcao){
                case"1":
                    const nomebaralho = prompt("nome do baralho: ")
                    criarBaralho({nomebaralho} )
                    console.log("baralho criado!!")
                menu()
                break;
                case "2":
                    
                    const pergunta = prompt("qual e a pergunta: ")
                    const resposta = prompt ("qual e a reposta: ")
                    listarBaralhos()
                    const idBaralho = prompt ("qual dos baralho: ") 
                    criarFlashcard({pergunta, resposta, idBaralho})
                    menu()
                break;
                case "3":
                    listarBaralhos()
                    menu()
                break;
                case "4":
                    listarFlashcards()
                    menu()
                break;
                case "5":
                    listarFlashcardsPorBaralhoId()
                    menu()
                break;
                case "6":
                   listarBaralhos()
                   id = parseInt(prompt("escolha um baralho:"))
                    const novoBaralho = prompt("novo nome do baralho: ")
                    autualizarBaralho(id, {nomebaralho: novoBaralho})
                    menu()
                break;
                case "7":
                listarFlashcards()   
                id = parseInt(prompt("escolha uma flashcard"))
                const novapergunta =  prompt("NOVA PERGUNTA:")
                const novaresposta = prompt("nova resposta")
                listarBaralhos()
                const novoid = prompt("novo id de baralho")
                atualizarFlashcard(id, {pergunta: novapergunta, resposta: novaresposta, idBaralho: novoid })
                menu()
                break;
                case "8":
                    listarBaralhos()
                    id = parseInt(prompt("qual deles vc deseja deletar ")) -1;
                    deletarBaralho(id);
                    menu()
                    
                break;
                case"9":
                listarFlashcards()
                id = parseInt(prompt("qual deles vc deseja deletar ")) -1;
               
                    deletarFlashcard(id)
                    menu()
                break;
                case"10":
                    buscarFlashcardsPorPergunta()
                break;
                case"11":
                    buscarFlashcardsPorBaralho()
                break;
                case"0":
                    console.log ("saindo........................")
                break;
                default:
                console.log("erro!!")
                menu()

    


            }
        
    
}
