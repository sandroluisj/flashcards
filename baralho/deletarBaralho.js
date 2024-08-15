let  {baralho} = require("../data")
function deletarBaralho(){
let index = baralho.findIndex(baralhos => baralhos.id === id);
baralho.splice(id, 1)
console.log("contato removido")

}
module.exports = deletarBaralho