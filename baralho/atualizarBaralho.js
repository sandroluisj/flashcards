let {baralho} = require("../data")
function atualizarBaralho(nomebaralho,novoBaralho){
    let index = baralho.findIndex(baralhos => baralhos.id === id);
    baralho[index] = {id, ...novoBaralho} 

}
module.exports = atualizarBaralho